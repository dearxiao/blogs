//这里放全局都能用到的函数
var url = "http://www.36xye0.com/", session_id
//全局公用的工具
function pagesimple(pageall, curr, func, node, obj) {
    addfunc(pageall, curr, node);
    $(".pr1-pre-page").on("click", function () {
        var currnow = $(this).attr("pagedata");
        func(currnow, obj);
    });
    $(".pr1-next-page").on("click", function () {
        var currnow = $(this).attr("pagedata");
        func(currnow, obj)
    });
    $(".pr1-page-middle i").on("click", function () {
        var currnow = $(this).attr("pagedata");
        func(currnow, obj)
    });
    $(".pr1-first-page").on("click", function () {
        var currnow = $(this).attr("pagedata");
        func(currnow, obj)
    });
    $(".pr1-last-page").on("click", function () {
        var currnow = $(this).attr("pagedata");
        func(currnow, obj)
    });
}

function addfunc(pageall, curr, node) {
    var showpage = 9;
    var halfshowpage = parseInt(showpage / 2);
    var html = "";
    html += '<p class="paging-top">'
    if (parseInt(curr) != 1) {
        html += '<span class="pr1-first-page" pagedata="1">首页</span>' +
            ' <i class="pr1-pre-page" pagedata="' + (parseInt(curr) - 1) + '">&lt;</i>'
    }
    html += '<span class="pr1-page-middle">'
    if (pageall > showpage) {
        if (parseInt(curr) <= halfshowpage) {
            for (var i = 0; i < showpage; i++) {
                if ((i + 1) == curr) {
                    html += '<i class="pr1-gray-bg" pagedata="' + (parseInt(i) + 1) + '">' + (parseInt(i) + 1) + '</i>';
                } else {
                    html += '<i pagedata="' + (parseInt(i) + 1) + '">' + (parseInt(i) + 1) + '</i>';
                }
            }
        } else {
            if (parseInt(curr) + halfshowpage < pageall) {
                //当前页加上增量还小于总页数的时候，正常显示
                var first = parseInt(curr) - halfshowpage;
                var last = parseInt(curr) + halfshowpage;
                for (var i = first; i <= last; i++) {
                    if (i == curr) {
                        html += '<i class="pr1-gray-bg" pagedata="' + i + '">' + i + '</i>'
                    } else {
                        html += '<i pagedata="' + i + '">' + i + '</i>'
                    }
                }
            } else {
                //当前页加上增量大于总页数的时候，显示个数不变
                var fisrt = pageall - showpage + 1;
                var last = parseInt(pageall) + 1;
                for (var i = fisrt; i < last; i++) {
                    if (i == curr) {
                        html += '<i class="pr1-gray-bg" pagedata="' + i + '">' + i + '</i>'
                    } else {
                        html += '<i pagedata="' + i + '">' + i + '</i>'
                    }
                }
            }
        }
    } else {
        for (var i = 0; i < pageall; i++) {
            if ((i + 1) == curr) {
                html += '<i class="pr1-gray-bg" pagedata="' + (parseInt(i) + 1) + '">' + (parseInt(i) + 1) + '</i>';
            } else {
                html += '<i pagedata="' + (parseInt(i) + 1) + '">' + (parseInt(i) + 1) + '</i>';
            }
        }
    }
    html += '</span>'
    if (curr != pageall) {
        html += '<i class="pr1-next-page" pagedata="' + (parseInt(curr) + 1) + '">></i>' +
            '<span class="pr1-last-page" pagedata="' + pageall + '">尾页</span>';
    }
    html += '<p class="paging-bottom">第<span>' + curr + '</span>页/共<span>' + pageall + '</span>页</p>'
    $("#" + node).children().remove();
    $("#" + node).html(html);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
var tool = {
    /**
     * 弹出层
     */
    popup: {
        hidePopup: function () {
            // Hide all popups
            $(".mask, .popup").removeClass("mask-trans").hide().css({
                "top": 0
            });
        },
        showPopup: function (obj) {
            //当前的显示
            obj.show();
            //遮罩层出来
            $(".mask").show();
            //下掉
            this.positionPopup(obj);
            //关闭
            $(".js-close-popup", obj).click(this.hidePopup);
        },
        positionPopup: function (obj) {
            // Position popup（下掉）
            obj.css({
                "top": Math.max(0, ($(window).height() - obj.outerHeight()) / 5)
            });
        }
    },
    /**
     * popup-error-msg
     */
    popup_err_msg: function (msg) {
        this.popup.hidePopup();
        $("#popup-p-error-msg").html(msg);
        this.popup.showPopup($("#popup-p-error"));
        setTimeout(function () {
            $(".mask, .popup").removeClass("mask-trans").hide().css({
                "top": 0
            });
        }, 2000)
    },
    /**
     * 判断为空
     */
    IsNullOrEmpty: function (obj) {
        var flag = false;
        if (obj == null || obj == undefined || typeof (obj) == 'undefined' || obj == '') {
            flag = true;
        } else if (typeof (obj) == 'string') {
            obj = obj.trim();
            if (obj == '') { //为空  
                flag = true;
            } else { //不为空  
                obj = obj.toUpperCase();
                if (obj == 'NULL' || obj == 'UNDEFINED' || obj == '{}') {
                    flag = true;
                }
            }
        } else {
            flag = false;
        }
        return flag;
    },
    /**
     * each列表      
     * @param {Object} dict
     * @param {Object} parent
     */
    GetDictList: function (dict, parent) {
        var base = this;
        var arr = [];
        $.each(dict, function (i, n) {
            if (base.IsNullOrEmpty(parent) && base.IsNullOrEmpty(n.parent_id)) {
                arr.push(eval("({id:'" + i + "',name:'" + n + "'})"));
            }
            if (!base.IsNullOrEmpty(parent) && !base.IsNullOrEmpty(n.parent_id)) {
                if (n.parent_id == parent) {
                    arr.push(eval("({id:'" + i + "',name:'" + n.name + "',parent_id:'" + n.parent_id + "'})"));
                }
            }
        });
        return arr;
    },

    //在当前时间上添加年数  
    addYear: function (years) {
        var cyear = this.getFullYear();
        cyear += years;
        this.setYear(cyear);
        return this;
    },
    //在当前时间上添加天数  
    addDay: function (days) {
        var cd = this.getDate();
        cd += days;
        this.setDate(cd);
        return this;
    },
    //在当前时间上添加月数  
    addMonth: function (months) {
        var cm = this.getMonth();
        cm += months;
        this.setMonth(cm);
        return this;
    },
    // 计算当前日期在本月份的周数  
    getWeekOfMonth: function (weekStart) {
        weekStart = (weekStart || 0) - 0;
        if (isNaN(weekStart) || weekStart > 6)
            weekStart = 0;

        var dayOfWeek = this.getDay();
        var day = this.getDate();
        return Math.ceil((day - dayOfWeek - 1) / 7) + ((dayOfWeek >= weekStart) ? 1 : 0);
    },
}
//事件
var general = {
    /**
     * 初始化
     */
    init: function () {
        this.eventsBind();
    },
    /**
     * 事件绑定
     */
    eventsBind: function () {
        var base = this;

        //-----头部显示个人中心-----
        //hover to show/hide user detials flyout
        $(".top-user-wrapper").mouseenter(function () {
            $(this).addClass("top-user-hovered");
            $(".overlay-account", $(this)).stop().fadeIn(200);
        }).mouseleave(function () {
            $(this).removeClass("top-user-hovered");
            $(".overlay-account", $(this)).stop().fadeOut(200);
        });

        //-----登录按钮弹出登录框-----
        $('a.login').on('click', function () {
            tool.popup.showPopup($('#popup-user-login'));
        })

        //-----登录框的登录-----
        $('#popup_user_login_submit').on('click', function () {
            base.user_login();
        })
        //-----回车键-----
        $('#popup-user-login').on('keyup', function (e) {
            if (e.keyCode == '13') {
                base.user_login();
            }
        })

        //-----tabs click-----
        $(".tabs-wrapper > nav li a").click(function () {
            if (!$(this).parent().hasClass("active")) {
                var w = $(this).parents(".tabs-wrapper").eq(0);
                $("> nav li", w).removeClass("active");
                $(this).parent().addClass("active");
                $("> .tabs > .tab-item", w).hide();
                $("#tab-" + $(this).attr("id")).show();
                window.setTimeout(function () {
                    $(".result-loading:visible").removeClass("result-loading");
                }, 3000);
            }
        });

        //date
        Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, //month 
                "d+": this.getDate(), //day 
                "h+": this.getHours(), //hour 
                "m+": this.getMinutes(), //minute 
                "s+": this.getSeconds(), //second 
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
                "S": this.getMilliseconds() //millisecond 
            }

            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }

            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        };
    },
    /**
     * 登录
     */
    user_login: function () {
        $('#error_name').hide()
        $('#error_psw').hide()
        if ($('#popup_user_login_name').val().length == 0) {
            $('#error_name').show();
            return;
        }
        if ($('#popup_user_login_pwd').val().length == 0) {
            $('#error_psw').show()
            return;
        }

        $.ajax({
			url: url + 'api/do_login',
            data: {
                phone: $("#popup_user_login_name").val(),
                password: $("#popup_user_login_pwd").val(),
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if (data == null) {
                    return
                };
                if (data.code != 200) {
                    tool.popup_err_msg(data.msg);
                    return;
                } else {
                    tool.popup_err_msg("登录成功");

                    $("#page_shared_layout_login").hide();
                    $("#page_shared_layout_unlogin").show();
                    $("#shared_header_mb").html(data.data.usableSum);
                    $("#page_shared_layout_login_name").html(data.data.username);
                }
            }
        })
    }
}

$(function () {
    //全局初始化
    general.init();
    //翻页
});