$(function () {
    // var zk = false;
    $('button.navbar-toggle').click(function () {
        $('button.navbar-toggle img').toggle()
        $('button.navbar-toggle span').toggle()
        // if (zk) {
        //     zk = false;
        //     $('.navbar-collapse.collapse').css('display', '')
        //     $('button.navbar-toggle img').hide()
        //     $('button.navbar-toggle span').show()
        // } else {
        //     zk = true;
        //     $('.navbar-collapse.collapse').attr('style', 'display:block !important')
        //     $('button.navbar-toggle img').show()
        //     $('button.navbar-toggle span').hide()
        // }
    })
    
    var fg = false;
    $('.gywm_li .hid_btns').click(function () {
        if (fg == false) {
            $(this).find('.hid_icons').animate({}, function () {
                $(this).css({
                    transform: 'rotate(180deg)'
                })
            })
            $('.gywm_li .hid_menu').slideDown()
            fg = true;
        } else {

            $(this).find('.hid_icons').animate({}, function () {
                $(this).css({
                    transform: 'rotate(0)'
                })
            })
            $('.gywm_li .hid_menu').slideUp()
            fg = false;
        }
    })
    var gg = false;
    $('.cpfa_li .hid_btns').click(function () {
        if (gg == false) {
            $(this).find('.hid_icons').animate({}, function () {
                $(this).css({
                    transform: 'rotate(180deg)'
                })
            })
            $('.cpfa_li .hid_menu').slideDown()
            gg = true;
        } else {
            $(this).find('.hid_icons').animate({}, function () {
                $(this).css({
                    transform: 'rotate(0)'
                })
            })
            $('.cpfa_li .hid_menu').slideUp()
            gg = false;
        }
    })
    var lx = false;
    $('.lxwm_li .hid_btns').click(function () {
        if (lx == false) {
            $(this).find('.hid_icons').animate({}, function () {
                $(this).css({
                    transform: 'rotate(180deg)'
                })
            })
            $('.lxwm_li .hid_menu').slideDown()
            lx = true;
        } else {
            $(this).find('.hid_icons').animate({}, function () {
                $(this).css({
                    transform: 'rotate(0)'
                })
            })
            $('.lxwm_li .hid_menu').slideUp()
            lx = false;
        }
    })
    var xl = false;
    $('.xl').click(function () {
        if (xl) {
            $(this).css({
                background: 'url(images/top2.png) no-repeat 95%',
                backgroundSize: '6%'
            })
            $(this).next('.small_ul').slideUp()
            xl = false;
        } else {
            $(this).css({
                background: 'url(images/down2.png) no-repeat 95%',
                backgroundSize: '6%'
            })
            $(this).next('.small_ul').slideDown()
            xl = true;
        }
    })
    var width = $(window).width();
    if (width > 1200) {
        //关于我们
        $('.gywm_li').stop().mouseenter(function () {
            $('.gywm').stop().slideDown()
        }).mouseleave(function () {
            $('.gywm').stop().slideUp()
        })
        $('.gywm').stop().mouseenter(function () {
            $('.nav li').removeClass('acitve');
            $('.gywm_li').addClass('acitve');
            $('.gywm').stop().slideDown()
        }).mouseleave(function () {
            $('.nav li').removeClass('acitve');
            $('.gywm').stop().slideUp()
        });

        //产品方案
        $('.cpfa_li').stop().mouseenter(function () {
            $('.cpfa').stop().slideDown()
        }).mouseleave(function () {
            $('.cpfa').stop().slideUp()
        });
        $('.cpfa').stop().mouseenter(function () {
            $('.nav li').removeClass('acitve');
            $('.cpfa_li').addClass('acitve');
            $('.cpfa').stop().slideDown()

        }).mouseleave(function () {
            $('.nav li').removeClass('acitve');
            $('.cpfa').stop().slideUp()
        })

        //联系我们
        $('.lxwm_li').stop().mouseenter(function () {
            $('.lxwm').stop().slideDown()
        }).mouseleave(function () {
            $('.lxwm').stop().slideUp()
        })
        $('.lxwm').stop().mouseenter(function () {
            $('.nav li').removeClass('acitve');
            $('.lxwm_li').addClass('acitve');
            $('.lxwm').stop().slideDown()
        }).mouseleave(function () {
            $('.nav li').removeClass('acitve');
            $('.lxwm').stop().slideUp()
        });
        $('.hid_menu').css({
            display: 'none'
        })
        //返回顶部
        $(".go_back").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    }
    window.onresize = function () {
        var width = $(window).width();
        if (width < 768) {
            $('.banner1').attr('src', 'images/mobile/banner1.png')
            $('.banner2').attr('src', 'images/mobile/banner2.png')
            $('.banner3').attr('src', 'images/mobile/banner3.png')
        }
        if (width > 768) {
            $('.banner1').attr('src', 'images/banner1.jpg')
            $('.banner2').attr('src', 'images/banner2.png')
            $('.banner3').attr('src', 'images/banner3.png')
        }
    }
})