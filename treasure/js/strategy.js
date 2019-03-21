var code = getQueryVariable('code').toLowerCase()
var myDate = new Date();
var day = myDate.getDay();
var mytime = myDate.toLocaleTimeString()
var market_open = false
if (day != 0 && day != 6) {
    if ('09:30' < mytime && mytime < '15:00') {
        market_open = true
    }
}

$(function () {
    // 已添加股票
    $.ajax({
        type: "get",
        url: url + "api/self_treasure_list",
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
    } else {
        data_m()
        price_s()
    }
    
    // 实时价格  每秒请求
    function price_s() {
        $.ajax({
            type: "post",
            url: url + "api/get_treasure_msg",
            data: {
                treasure_code: code
            },
            success: function (res) {
                console.log('实时价格', res)
                if (res.code == 200) {
                    var data = res.data[0]
                    var cla = '', rise = ''
                    if (data.differ_price > 0) {
                        cla = 'up'
                        rise = '+'
                    }
                    $('.info .price').text(data.price);
                    $('.info .zd').text(data.differ_price).addClass(cla);
                    $('.info .zdf').text(rise + data.differ_scale + '%').addClass(cla);
                }
            }
        });
    }
    
    // 持仓
    $.ajax({
        type: "get",
        url: url + "api/order",
        success: function (res) {
            console.log('持仓', res)
            if (res.code == 200) {
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
                            "<a href=\"deposit.html\">+保证金</a>"+
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
                            "<span>止损(元)："+data[i].win_sum+"</span>"+
                            "<div class=\"right\">"+
                                "<p>买入(元)：<b>"+data[i].buy_price+"</b></p>"+
                                "<p>当前(元)：<b>"+data[i].now_price+"</b></p>"+
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
                    $('.tab1').append(intro);
                }
            }
        }
    });
    // 点卖
    $('.tab1').on('click', '.top button',function () {
        var id = $(this).attr('cid')
        $('.shade, .hint2').show()
        $('.confirm_sale').off('click').click(function () { 
            $.ajax({
                type: "post",
                url: url + "api/sale?id="+id,
                success: function (res) {
                    console.log('点卖', res)
                    if (res.code == 200) {
                        
                    }
                }
            });
        });
    });
    
    // 历史
    $.ajax({
        type: "get",
        url: url + "api/history_order",
        success: function (res) {
            console.log('历史', res)
            if (res.code == 200) {
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