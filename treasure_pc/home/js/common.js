$(function () {
    // 悬浮窗
    $(".side-pannel>li.wechat").hover(function () {
        $(this).children("div.wechat").show();
    }, function () {
        $(this).children("div.wechat").hide();
    });
    //自动选中active
    var menuArr = [];
    menuArr[0] = ["index"];
    menuArr[1] = ["buy", "sell", "history"];
    menuArr[2] = ["freeTrial", "freeTrialSell", "freeTrialHistory"];
    menuArr[3] = ["mobile"];
    menuArr[4] = ["guild"];
    for (var i = 0; i < menuArr.length; i++) {
        for (var j = 0; j < menuArr[i].length; j++) {
            if (location.href.indexOf(menuArr[i][j]) > 0) {
                $("#menu-ul > li a").removeClass("active");
                $("#menu-ul > li").eq(i).find("a").eq(0).addClass("active");
                $("#menu-ul > li").eq(i).find("a").eq(j + 1).addClass("active");
                return;
            }
        }
    }
})