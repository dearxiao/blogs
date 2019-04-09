var code = getQueryVariable('code').toLowerCase()
$('input[name=treasure_code]').val(code)
$('input[name=session_id]').val(session_id);
$('form').attr('action', url+'api/buy');    
var myDate = new Date();
var day = myDate.getDay();
var onedate = myDate.toLocaleString('chinese', { hour12: false }).slice(-8)
var hours = parseInt(onedate.slice(0, 2))
var minute = parseInt(onedate.slice(3, 5))
var market_open = false
console.log(('2091/4/3 13:11:00').slice(-8))
if (day != 0 && day != 6) {
    if ((hours == 9 && minute >= 30) || (hours == 11 && minute < 30) || hours == 10) {
        market_open = true
    }
    if (hours >= 13 && hours < 15) {
        market_open = true
    }
    if (market_open) {
        $('button.buy').text('策略点买').css('background', '#dc2333');
    }
}

$(function () {
    // 已添加股票
    $.ajax({
        type: "get",
        url: url + "api/self_treasure_list",
        data: {
            session_id: session_id
        },
        success: function (res) {
            console.log('已添加股票代码', res)
            if (res.code == 200) {
                if (res.data.indexOf(code) != -1) {
                    $('.operate').attr({
                        'src': 'images/minus.png',
                        'added': 'no'
                    });
                }
                $('.operate').css('opacity', '1')
            }
            if (res.error_code == 1111) {
                error()
            }
        },
        error: function () {
            error()
        }
    });
    // 添加删除
    $('.operate').click(function () { 
        var added = $(this).attr('added'), way, src
        if (added == 'no') {
            way = 'del_treasure'
            src = 'images/add.png'
        } else {
            way = 'add_treasure'
            src = 'images/minus.png'
        }
        $.ajax({
            type: "post",
            url: url + "api/" + way,
            data: {
                session_id: session_id,
                treasure_code: code
            },
            success: function (res) {
                console.log(res)
                tips(res)
                if (res.code == 200) {
                    $('.operate').attr('src', src)
                }
            }
        });
    });
    // 点买  每分钟请求
    function data_m() {
        $.ajax({
            type: "post",
            url: url + "api/treasure_msg",
            data: {
                session_id: session_id,
                treasure_code: code
            },
            success: function (res) {
                console.log('点买', res)
                if (res.code == 200) {
                    var data = res.data[0]
                    $('.info div p').text(data.股票名字);
                    $('.info div span').text(code);
                    $('.tab0 li:eq(0) p:eq(1)').text(data.今日开盘价);
                    $('.tab0 li:eq(0) p:eq(3)').text(data.昨日收盘价);
                    $('.tab0 li:eq(1) p:eq(1)').text(data.今日最高价);
                    $('.tab0 li:eq(1) p:eq(3)').text(data.今日最低价);
                    $('.tab0 li:eq(2) p:eq(1)').text(data.成交的股票数);
                    $('.tab0 li:eq(2) p:eq(3)').text(data.成交金额);
                    $('.tab0 li:eq(3) p:eq(1)').text((data.昨日收盘价*1.1).toFixed(3));
                    $('.tab0 li:eq(3) p:eq(3)').text((data.昨日收盘价*0.9).toFixed(3));
                    $('.sale li:eq(4) span:eq(1)').text(data.卖一价)
                    $('.sale li:eq(3) span:eq(1)').text(data.卖二价)
                    $('.sale li:eq(2) span:eq(1)').text(data.卖三价)
                    $('.sale li:eq(1) span:eq(1)').text(data.卖四价)
                    $('.sale li:eq(0) span:eq(1)').text(data.卖五价)
                    $('.sale li:eq(4) span:eq(2)').text(data.卖一)
                    $('.sale li:eq(3) span:eq(2)').text(data.卖二)
                    $('.sale li:eq(2) span:eq(2)').text(data.卖三)
                    $('.sale li:eq(1) span:eq(2)').text(data.卖四)
                    $('.sale li:eq(0) span:eq(2)').text(data.卖五)
                    $('.buy li:eq(0) span:eq(1)').text(data.买一价)
                    $('.buy li:eq(1) span:eq(1)').text(data.买二价)
                    $('.buy li:eq(2) span:eq(1)').text(data.买三价)
                    $('.buy li:eq(3) span:eq(1)').text(data.买四价)
                    $('.buy li:eq(4) span:eq(1)').text(data.买五价)
                    $('.buy li:eq(0) span:eq(2)').text(data.买一)
                    $('.buy li:eq(1) span:eq(2)').text(data.买二)
                    $('.buy li:eq(2) span:eq(2)').text(data.买三)
                    $('.buy li:eq(3) span:eq(2)').text(data.买四)
                    $('.buy li:eq(4) span:eq(2)').text(data.买五)
                }
            }
        });
    }
    if (market_open) {
        setInterval(function () {
            data_m()
        }, 1000 * 60)
        setInterval(function () {
            price_s()
        }, 1000)
    }
    data_m()
    price_s()
    // 实时价格  每秒请求
    function price_s() {
        $.ajax({
            type: "post",
            url: url + "api/get_treasure_msg",
            data: {
                session_id: session_id,
                treasure_code: code
            },
            success: function (res) {
                // console.log('实时价格', res)
                if (res.code == 200) {
                    var data = res.data[0]
                    var cla = '', rise = ''
                    if (data.differ_price > 0) {
                        cla = 'up'
                        rise = '+'
                    }
                    $('.info .price').text(data.price);
                    $('input[name=price]').val(data.price);
                    $('.info .zd').text(rise + (data.differ_price).toFixed(2)).addClass(cla);
                    $('.info .zdf').text(rise + data.differ_scale + '%').addClass(cla);
                }
            }
        });
    }
    // 策略点买
    $('button.buy').click(function () {
        $('.hint2 p').text('确认买入该股？');
        $('.shade, .hint2').show()
        $('.confirm_sale').off('click').click(function () {
            $('.shade, .hint2').hide()
            $('.tab0 form').submit();
            $("form").ajaxForm(function (res) {
                console.log(res)
                if (res.code == 200) {
                    chicang ()
                }
            });
            
        });
    });
    // 持仓
    chicang ()
    function chicang () {
        $.ajax({
            type: "get",
            url: url + "api/order",
            data: {
                session_id: session_id,
            },
            success: function (res) {
                console.log('持仓', res)
                if (res.code == 200) {
                    $('.tab1').html('')
                    for (let i = 0; i < res.list_data.length; i++) {
                        var data = res.list_data
                        var cla = 'up',
                            rise = '+'
                        if (res.list_data[i].win_sum < 0) {
                            cla = 'down'
                            rise = ''
                        }
                        var intro = "<div class=\"intro\">"+
                            "<div class=\"top\">"+
                                "<span>"+data[i].name+"</span>"+
                                "<a href=\"deposit.html?id="+data[i].id+"\">+保证金</a>"+
                                "<button cid="+data[i].id+">点卖</button>"+
                            "</div>"+
                            "<div class=\"semicircle-l\"></div>"+
                            "<div class=\"semicircle-r\"></div>"+
                            "<div class=\"center\">"+
                                "<div>"+
                                    "<p>"+data[i].buy_money+"</p>"+
                                    "<span>金额(元)</span>"+
                                "</div>"+
                                "<div>"+
                                    "<p>"+data[i].treasure_sum+"</p>"+
                                    "<span>股数</span>"+
                                "</div>"+
                                "<div>"+
                                    "<p class="+cla+">" + rise + ""+data[i].win_sum+"</p>"+
                                    "<span>盈亏(元)</span>"+
                                "</div>"+
                            "</div>"+
                            "<div class=\"bottom\">"+
                                "<span>止损(元)："+data[i].zhisun_sum+"</span>"+
                                "<div class=\"right\">"+
                                    "<p>买入(元)：<b>"+data[i].buy_price+"</b></p>"+
                                    "<p>当前(元)：<b>"+data[i].now_price+"</b></p>"+
                                "</div>"+
                            "</div>"+
                            "<ul class=\"detail\">"+
                                "<li class=\"w100\">买入时间:<span>"+data[i].create_time+"</span></li>"+
                                "<li class=\"w100\">交易号:<span>"+data[i].order_num+"</span></li>"+
                                "<li>浮动盈亏比(%):<span>"+data[i].scale+"</span></li>"+
                                "<li>保证金(元):<span>"+data[i].account_money+"</span></li>"+
                                "<li>+保证金:<span>"+data[i].more_account_money+"</span></li>"+
                                "<li>止损价(元):<span>"+data[i].zhisun_price+"</span></li>"+
                                "<li>递延天数(天):<span>"+data[i].days+"</span></li>"+
                                "<li>递延费(元):<span>"+data[i].diyan_sum+"</span></li>"+
                            "</ul>"+
                        "</div>"
                        $('.tab1').append(intro);
                    }
                }
            }
        });
    }
    // 点卖
    $('.tab1').on('click', '.top button',function () {
        var id = $(this).attr('cid'), that = this
        $('.hint2 p').text('确认卖出该股？');
        $('.shade, .hint2').show()
        $('.confirm_sale').off('click').click(function () {
            $('.shade, .hint2').hide()
            $.ajax({
                type: "post",
                url: url + "api/sale?id="+id,
                data: {
                    session_id: session_id,
                },
                success: function (res) {
                    console.log('点卖', res)
                    tips(res)
                    if (res.code == 200) {
                        $(this).parent('.top').parent('.intro')
                    }
                }
            });
        });
    });
    // 历史
    $.ajax({
        type: "get",
        url: url + "api/history_order",
        data: {
            session_id: session_id,
        },
        success: function (res) {
            console.log('历史', res)
            if (res.code == 200) {
                for (let i = 0; i < res.data.length; i++) {
                    var data = res.data.reverse()
                    var cla = 'up',
                        rise = '+'
                    if (res.data[i].win_sum < 0) {
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
                                "<p class="+cla+">" + rise + ""+data[i].jiaoyi_sum+"</p>"+
                                "<span>盈亏(元)</span>"+
                            "</div>"+
                        "</div>"+
                        "<ul class=\"detail\">"+
                            "<li>买入价格(元):<span>"+data[i].buy_price+"</span></li>"+
                            "<li>卖出价格(元):<span>"+data[i].sale_price+"</span></li>"+
                            "<li>保证金:<span>"+data[i].account_money+"</span></li>"+
                            "<li>止损价(元):<span>"+data[i].zhisun_price+"</span></li>"+
                            "<li>递延费(元):<span>"+data[i].diyan_sum+"</span></li>"+
                            "<li>交易综合费:<span>"+data[i].buy_scale+"</span></li>"+
                            "<li>交易分配额:<span>"+data[i].win_sum+"</span></li>"+
                            "<li class=\"w100\">买入时间:<span>"+data[i].create_time+"</span></li>"+
                            "<li class=\"w100\">交易号:<span>"+data[i].order_num+"</span></li>"+
                            "<li class=\"w100\">卖出时间:<span>"+data[i].update_time+"</span></li>"+
                        "</ul>"+
                    "</div>"
                    $('.tab2').append(intro);
                }
            }
        }
    });
    // 买入金额
    $('form .money').on('click', 'li', function () {
        var buy_type = $(this).attr('buy_type')
        var money = $(this).attr('money')
        $('input[name=buy_type]').val(buy_type);
        $('.deposit li:eq(0)').text(1000 * money);
        $('.deposit li:eq(1)').text(1250 * money);
        $('.deposit li:eq(2)').text(1666 * money);
        $('.stop span:eq(0) b').text(($('.deposit .act').text() * -0.7).toFixed(2));  // 触发止损
        $('.stop span:eq(1) b').text(42 * money); // 交易综合费
        $(this).siblings('li').removeClass('act')
        $(this).addClass('act');
    });
    // 履约保证金
    $('form .deposit').on('click', 'li', function () {
        var acction_type = $(this).attr('acction_type')
        var cash = $(this).text();
        $('input[name=acction_type]').val(acction_type);
        $('.stop span:eq(0) b').text((cash * -0.7).toFixed(2));  // 触发止损
        $(this).siblings('li').removeClass('act')
        $(this).addClass('act');
    });
    // 账户余额
    $.ajax({
        type: "get",
        url: url + "api/my_msg",
        data: {
            session_id: session_id,
        },
        success: function (res) {
            console.log('账户余额', res)
            if (res.code == 200) {
                $('.yue span').text(res.data.money);
            }
        }
    });
    // 选项卡
    $('.title2 span').click(function () {
        var i = $(this).index()
        $(this).siblings('span').removeClass('act');
        $(this).addClass('act');
        $('.chart').hide();
        $('.chart' + i + '').show();
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