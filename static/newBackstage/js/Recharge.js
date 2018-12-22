$(function () {
    //内容选项卡切换
    $(".rh_title>li").click(function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        var $li = $(".rh_cont>li").eq(index);
        $li.siblings().removeClass("show");
        $li.addClass("show");
    });

    //弹出层（累计兑换）
    $(".exchange").click(function () {
        $(".mask").fadeToggle(200);
        $(".exchangeList").show(200);
        $(".maskPages").hide();
    });

    $(".close,.exCancel").click(function () {
        $(".mask").fadeOut(200);
        $(".exchangeList").hide(200);
        $(".maskPages").show(200);
    });

    //弹出层（累计充值）
    $(".recharge").click(function () {
        $(".mask").fadeToggle(200);
        $(".rechargeList").show(200);
        $(".maskPages").hide();
    });

    $(".close,.reCancel").click(function () {
        $(".mask").fadeOut(200);
        $(".rechargeList").hide(200);
        $(".maskPages").show(200);
    });

    //弹出层（累计赠分	）
    $(".give").click(function () {
        $(".mask").fadeToggle(200);
        $(".giveList").show(200);
        $(".maskPages").hide(200);
    });

    $(".close,.giCancel").click(function () {
        $(".mask").fadeOut(200);
        $(".giveList").hide(200);
        $(".maskPages").show(200);
    });

    //登陆详情
    $(".details").click(function () {
        $(".mask").fadeToggle(200);
        $(".detailsList").show(200);
        // $(".commMask").remove();
        $(".commMask").addClass("commMask1");
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".detailsList").hide(200);
        $(".commMask").removeClass("commMask1");
    });
});