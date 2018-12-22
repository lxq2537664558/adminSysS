//在线用户
$(function () {
    //选项卡切换
    $(".rh_title>li").click(function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        var $li = $(".rh_cont>li").eq(index);
        $li.siblings().removeClass("show");
        $li.addClass("show");
    });

    //房间点击切换
    $(".rh_cont>li>ul>li").click(function () {
        $(".room").show();
        $(".rh_cont").hide();
        $(".back").show();
    });
    //返回房间
    $(".goBack>.back").each(function () {
        $(this).bind("click", function () {
            $(".room").hide();
            $(".rh_cont").show();
            $(".back").hide();
        })
    });
});