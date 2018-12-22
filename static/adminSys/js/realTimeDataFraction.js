$(function () {
    //1.监听一级菜单的点击事件
    $(".nav_1>li").click(function () {
        //1.1拿到二级菜单
        var $sub = $(this).children(".sub_1");
        //1.2让二级菜单展开
        $sub.slideDown(500);
        //1.3拿到所有非当前的二级菜单
        var other = $(this).siblings().children(".sub_1");
        //1.4让所有非当前二级菜单收起
        other.slideUp(500);
        //1.5让被点击的一级菜单箭头旋转
        $(this).addClass("current");
        //1.6让所有非被所有点击的一级菜单还原
        $(this).siblings().removeClass("current");
    });

    //总览和各个房间切换
    $(".all").click(function () {
        $(".singleRoomList").hide();
        $(".allList").show();
        $(".singleRoom").removeClass("current");
        $(this).addClass("current");

    });
    $(".singleRoom").click(function () {
        $(".allList").hide();
        $(".singleRoomList").show();
        $(".all").removeClass("current");
        $(this).addClass("current");
    });

    //选项卡切换
    $(".rh_title>li").click(function () {
        $(this).addClass("comm");
        $(this).siblings().removeClass("comm");
        var index = $(this).index();
        var $li = $(".rh_cont>li").eq(index);
        $li.siblings().removeClass("show");
        $li.addClass("show");
    });

    //场次切换
    $(".btn>a").click(function () {
        $(this).addClass("site");
        $(this).siblings().removeClass("site");
    });

});