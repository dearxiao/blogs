var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})
var myDate = new Date();
var day = myDate.getDay();
var onedate = myDate.toLocaleString('chinese', {
    hour12: false
}).slice(10)
var hours = parseInt(onedate.slice(0, 2))
var minute = parseInt(onedate.slice(3, 5))
var market_open = false
if (day != 0 && day != 6) {
    if ((hours == 9 && minute >= 30) || (hours == 11 && minute < 30) || hours == 10) {
        market_open = true
    }
    if (hours >= 13 && hours < 15) {
        market_open = true
    }
}
$(function () {
    var my_stocks //自选股数组
    // 轮播图
    $.ajax({
        type: "get",
        url: url + "api/get_banner",
        data: {
            session_id: session_id
        },
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                for (let i = 0; i < res.data.length; i++) {
                    var banner = "<div class=\"swiper-slide\"><img src="+url+"" + res.data[i] + "></div>"
                    $('.swiper-wrapper').append(banner);
                }
            }
            if (res.error_code == 1111) {
                error()
            }
        },
        error: function () {
            error()
        }
    });
    // 公告
    $.ajax({
        type: "get",
        url: url + "api/notice",
        data: {
            session_id: session_id,
        },
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                $('marquee').text(res.data[0].introduce);
            }
        }
    });
    // 多个股票
    function stocks() {
        $.ajax({
            type: "post",
            url: url + "api/get_treasure_msg",
            data: {
                session_id: session_id,
                treasure_code: 'sh000001,sz399001,sz399006'
            },
            success: function (res) {
                // console.log('多个股票', res)
                if (res.code == 200) {
                    var li
                    for (let i = 0; i < res.data.length; i++) {
                        var cla = '',
                            rise = '+'
                        if (res.data[i].differ_price < 0) {
                            cla = 'down'
                            rise = ''
                        }
                        li += "<li class = " + cla + ">" +
                            "<h3 class = " + cla + ">" + res.data[i].name + "</h3>" +
                            "<p class = " + cla + ">" + res.data[i].price + "</p>" +
                            "<span>" + rise + "" + res.data[i].differ_price.toFixed(2) + "</span>" +
                            "<span>" + rise + "" + res.data[i].differ_scale.toFixed(2) + "%</span>" +
                            "</li>"
                    }
                    $('.market').html(li);
                }
            }
        });
    }
    if (market_open) {
        setInterval(function () {
            stocks()
            my_stock()
        }, 1000)
    } else {
        stocks()
        my_stock()
    }

    // 自选股票
    $.ajax({
        type: "get",
        url: url + "api/self_treasure_list",
        data: {
            session_id: session_id
        },
        success: function (res) {
            console.log('自选股票代码', res)
            if (res.code == 200) {
                if (res.data.length > 0) {
                    $('.stock ul').show();
                    $.ajax({
                        type: "post",
                        url: url + "api/get_treasure_msg",
                        data: {
                            session_id: session_id,
                            treasure_code: res.data.join(',')
                        },
                        success: function (res) {
                            console.log('自选股票详情', res)
                            if (res.code == 200) {
                                for (let i = 0; i < res.data.length; i++) {
                                    var cla = '',
                                        rise = '+'
                                    if (res.data[i].differ_price < 0) {
                                        cla = 'down'
                                        rise = ''
                                    }
                                    var li = "<li onclick=\"location.href='strategy.html?code=" + res.data[i].number + "'\">" +
                                        "<img class=\"del\" src=\"images/minus.png\" treasure_code=" + res.data[i].number + ">" +
                                        "<div class=\"li-left\">" +
                                        "<p>" + res.data[i].name + "</p>" +
                                        "<span>" + res.data[i].number + "</span>" +
                                        "</div>" +
                                        "<p>" + res.data[i].price + "</p>" +
                                        "<span class = " + cla + ">" + rise + "" + res.data[i].differ_scale + "%</span>" +
                                        "</li>"
                                    $('.stock ul').append(li);
                                }
                                my_stocks = res.data
                            }
                        }
                    });
                } else {
                    $('.empty').show();
                }
            }
        }
    });
    // 自选股票详情
    function my_stock() {
        if (my_stocks) {
            $.ajax({
                type: "get",
                url: url + "api/self_treasure_list",
                data: {
                    session_id: session_id
                },
                success: function (res) {
                    if (res.code == 200) {
                        $.ajax({
                            type: "post",
                            url: url + "api/get_treasure_msg",
                            data: {
                                session_id: session_id,
                                treasure_code: res.data.join(',')
                            },
                            success: function (res) {
                                // console.log('自选股票详情', res)
                                for (let i = 0; i < res.data.length; i++) {
                                    var cla = '',
                                        rise = '+'
                                    if (res.data[i].differ_price < 0) {
                                        cla = 'down'
                                        rise = ''
                                    }
                                    $('.stock li:eq(' + i + ')>p').text(my_stocks[i].price)
                                    $('.stock li:eq(' + i + ')>span').text(rise + my_stocks[i].differ_scale + '%').attr('class', cla)
                                }
                            }
                        });
                    }
                }
            });
        }
    }
    // 编辑自选股
    $('.edit').click(function () {
        $('.stock li img').toggle();
    });
    // 删除自选股
    $('.stock ul').on('click', '.del', function () {
        var treasure_code = $(this).attr('treasure_code')
        that = this
        $.ajax({
            type: "post",
            url: url + "api/del_treasure",
            data: {
                session_id: session_id,
                treasure_code: treasure_code
            },
            success: function (res) {
                console.log(res)
                tips(res)
                if (res.code == 200) {
                    $(that).parent('li').hide()
                }
            }
        });
    })
})