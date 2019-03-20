$(function () {
    // 点买
    $.ajax({
        type: "post",
        url: url + "api/treasure_msg",
        data: {
            treasure_code: 'sh600519'
        },
        success: function (res) {
            console.log('点买', res)
        }
    });
    // 历史
    $.ajax({
        type: "get",
        url: url + "api/history_order",
        success: function (res) {
            console.log('历史', res)
            for (let i = 0; i < res.data.length; i++) {
                var data = res.data
                var cla = 'up',
                    rise = '+'
                if (res.data[i].differ_price < 0) {
                    cla = 'down'
                    rise = ''
                }
                var intro = "<div class=\"intro\">"+
                    "<div class=\"top\">"+
                        "<span>"+data[i].name+" "+data[i].update_time+"</span>"+
                    "</div>"+
                    "<div class=\"semicircle-l\"></div>"+
                    "<div class=\"semicircle-r\"></div>"+
                    "<div class=\"center\">"+
                        "<div>"+
                            "<p class="+cla+">" + rise + ""+data[i].win_sum+"</p>"+
                            "<span>盈亏(元)</span>"+
                        "</div>"+
                    "</div>"+
                    "<ul class=\"detail\">"+
                        "<li>买入时间:<span>"+data[i].create_time+"</span></li>"+
                        "<li>浮动盈亏比(%):<span>"+data[i].buy_scale+"</span></li>"+
                        "<li>交易号:<span>"+data[i].id+"</span></li>"+
                        "<li>保证金(元):<span>"+data[i].days+"</span></li>"+
                        "<li>+保证金:<span>"+data[i].days+"</span></li>"+
                        "<li>止损价(元):<span>"+data[i].days+"</span></li>"+
                        "<li>递延天数(天):<span>"+data[i].days+"</span></li>"+
                        "<li>递延费(元):<span>"+data[i].diyan_sum+"</span></li>"+
                        "<li>卖出时间:<span>"+data[i].update_time+"</span></li>"+
                    "</ul>"+
                "</div>"
                $('.tab2').append(intro);
            }
        }
    });
    $('form').on('click', 'li', function () { 
        $(this).siblings('li').removeClass('act')
        $(this).addClass('act');
    });
    // 选项卡
    $('.title2 span').click(function () {
        var i = $(this).index()
        $(this).siblings('span').removeClass('act');
        $(this).addClass('act');
        $('.chart').hide();
        $('.chart' + i + '').show();
    });
    // 点卖
    $('.top button').click(function () { 
        $('.shade, .hint2').show()
    });
    // K线图
    $('.info .arrow').click(function () { 
        $('.data').slideToggle();
        $(this).toggleClass('arrow2');
    });
    // 详细信息
    $('.intro .arrow').click(function () { 
        $(this).next('ul.detail').toggle();
        $(this).toggleClass('arrow2');
    });
})