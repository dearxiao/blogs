$(function () {
    $.ajax({
        type: "get",
        url: url + "api/treasure_history/sh600001",
        success: function (res) {
            console.log(JSON.parse(res))
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