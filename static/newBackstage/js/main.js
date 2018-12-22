//公共部分
$(function () {
    //个人中心的显示与隐藏
    $(".logo-icon").click(function () {
        $(".listNone").toggle(500);
    });

    //左侧列表li背景切换
    $('.leftList li').click(function (){
        //把之前已有的active去掉
        $('.active').removeClass('active');
        //当前点击的li加上class
        $(this).addClass("active");

    });

    //分页添加class
    $(".pages>.fenye>a").hover(function () {
        $(this).addClass("page");
    },function () {
        $(this).removeClass("page");
    });
});