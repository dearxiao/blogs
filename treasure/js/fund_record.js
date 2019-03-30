$(function () {
    $('.filtrate').click(function () { 
        $('.shade').toggle();
        $('.type').slideToggle();
    });
    $('.type li').click(function () {
        var type = $(this).index()
        record(1, type)
        $('.record li').remove()
        $('.type li').removeClass('act')
        $(this).addClass('act');
        $('.shade').toggle();
        $('.type').slideToggle();
    })
    record(1, 0)
    
})
function record (page, type) {
    layui.use('flow', function(){
        var flow = layui.flow;
        flow.load({
            elem: '.record' //指定列表容器
            ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                var lis = [];
                $.ajax({
                    type: "get",
                    url: url + "api/deal_msg/"+ page+'/'+type,
                    data: {
                        session_id: session_id,
                    },
                    success: function (res) {
                        console.log(res)
                        for (let i = 0; i < res.length; i++) {
                            var li ="<li>"+
                                        "<div>"+
                                            "<p>"+res[i].data.type+"</p>"+
                                            "<span>"+res[i].data.money+"</span>"+
                                        "</div>"+
                                        "<div>"+
                                            "<p>"+res[i].data.update_time+"</p>"+
                                            "<span>"+res[i].data.type_msg+"</span>"+
                                        "</div>"+
                                    "</li>"
                            lis.push(li)
                        }
                        //all_page为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                        next(lis.join(''), page < res.all_page);
                    }
                });
            }
        });
    });
}