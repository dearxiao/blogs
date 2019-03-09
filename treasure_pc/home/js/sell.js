var ol = [];

//查询余额
function getbalance() {
    $.ajax({
        type: "get",
        url: "/user/getUserInfo",
        async: true,
        dataType: "json",
        success: function (e) {
            if (e.code == "0") {
                $("#addBalance").html(e.data.usableSum)
            } else {
                tool.popup_err_msg(e.msg)
            }
        }
    });
}

//点卖增加保证金操作
function dealstep() {
    //点卖
    $(".btnSell").click(function (e) {
        var index = $(this).attr("index");
        var i = index;
        console.log(i)
        $("#t_code").html(ol[i]['stockName'] + "(" + ol[i]['stockCode'] + ")");
        $("#t_quantity").html(ol[i]['dealQuantity'] + "股");
        $("#t_time").html(ol[i]['createTime']);
        $("#t_delayDays").html(ol[i]['delayDays']);
        $("#t_profit").html(ol[i]['profitAmount']);

        var prf = parseFloat(ol[i]['profitAmount']);
        if (prf < 0) {
            $("#t_profit").attr("class", "c-green");
        } else if (prf > 0) {
            $("#t_profit").attr("class", "c-red");
        } else {
            $("#t_profit").removeAttr("class");
        }

        var orderId = $(this).attr('id');
        $("#orderId").val(orderId);

        tool.popup.showPopup($("#popup-sell"));
    });

    //点卖确认
    $("#popup-confirm-btn").click(function (e) {

        var orderId = $("#orderId").val();
        var params = {
            orderId: orderId
        };
        if (orderId <= 0) {
            tool.popup_err_msg("订单号不正确");
            return;
        }
        $(this).attr("disabled", true);
        $.post("/user/stockSell", params, function (data) {
            $("#popup-confirm-btn").attr("disabled", false);
            if (data.code == '0') {
                tool.popup_err_msg("交易成功");
                location.href = "/ucenter/history";
            } else {
                tool.popup_err_msg(data.msg);
            }
        }, 'json');
    });

    //增加保证金 按钮   


    $(".addAssure").on("click", function () {
        console.log(222)
        var thisId = $(this).attr('id');
        var tandom = '<div class="add-assure-box"><div class="assureBox"><h4>增加保证金</h4>' +
            '<div class="assureB"><p>账户可用余额：<span id="addBalance"></span>元</p><a href="/ucenter/payment">充值</a>' +
            '</div><div  class="assureI"><span>保证金：</span> <input class="assureInput" type="text" name="assureInput" id="assureInput"/><span class="assureI-yuan">元</span></div>' +
            '<div class="assureBtn"><button id="assureOk" class="assureOk">确认</button><button id="assureNo" class="assureNo">取消</button></div>' +
            '</div></div>';
        $('body').append(tandom);
        getbalance();

        $(".closetan").on("click", function () {
            $(".add-assure-box").remove()
        })

        $("#assureOk").on('click', function () {
            var addval = $.trim($("#assureInput").val());
            var account = parseFloat($("#addBalance").text());
            var btnflag = false;

            if (!/^[0-9]+(.[0-9]{2})?$/.test(addval)) {
                tool.popup_err_msg("请输入正确的数字")
            } else if (addval > account) {
                tool.popup_err_msg("输入金额大于账户余额")
            } else {
                if (btnflag) return false;
                btnflag = true;
                $.ajax({
                    type: "post",
                    url: "/user/addDeposit",
                    dataType: "json",
                    data: {
                        orderId: thisId,
                        amount: addval
                    },
                    async: true,
                    success: function (data) {
                        if (data.code == '0') {
                            $(".add-assure-box").remove();
                            btnflag = false;
                            tool.popup_err_msg("增加成功");
                            window.location.href = location.href
                        } else {
                            btnflag = false;
                            tool.popup_err_msg(data.msg);
                        }
                    }
                });
            }
        })

        $("#assureNo").on("click", function () {
            $(".add-assure-box").remove()
        })
    })

}

//我的持仓记录查询
function getlist(curr) {
    $.ajax({
        type: "get",
        url: "/user/position",
        async: true,
        dataType: "json",
        data: {
            page: curr,
            size: "10"
        },
        success: function (e) {
            if (e.code == "0") {
                $("#myhave").find(".mark").remove();
                if (e.data.orderList.length > 0) {
                    $(".havebuy").show();
                    var i = 0,
                        list = "";
                    ol = e.data.orderList.sort(function (a, b) {
                        return a.id - b.id
                    })
                    for (; i < ol.length; i++) {
                        var pf = eval(ol[i].profitAmount) > 0 ? "<span class='c-red'>" + ol[i].profitAmount +
                            "</span>" : "<span class='c-green'>" + ol[i].profitAmount + "</span>"
                        list += '<tr class="mark"><td>' + (i + 1) + '</td>' +
                            '<td>' + ol[i].id + '</td>' +
                            '<td>' + ol[i].createTime.slice(0, 10) + '<br/>' + ol[i].createTime.slice(
                                10, 19) + '</td>' +
                            '<td>' + ol[i].stockName + '<br/>' + ol[i].stockCode + '</td>' +
                            '<td>' + ol[i].guaranteeFee + '</td>' +
                            '<td>' + ol[i].dealPrice + '</td>' +
                            '<td>' + ol[i].nowPrice + '</td>' +
                            '<td>' + ol[i].rate + '%' + '</td>' +
                            '<td>' + pf + '</td>' +
                            '<td>' + ol[i].dealQuantity + '</td>' +
                            '<td>' + ol[i].loss + '</td>' +
                            '<td><a id="' + ol[i].id + '" ' + 'index="' + i +
                            '" class="myhave-btn addAssure  coloradd">增加保证金</a>' +
                            '<a id="' + ol[i].id + '" ' + 'index="' + i +
                            '" class="myhave-btn  btnSell colorsell">点卖</a></td></tr>'
                    }
                    $("#myhave").append(list);
                    var pageall = Math.ceil(e.data.total / 10);
                    pagesimple(pageall, curr, getlist, "page");
                    dealstep();

                } else {
                    $("#nodata").show();
                }
            } else {
                tool.popup_err_msg(e.msg)
            }

        }
    });
}
// getlist(1)