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
    $(".serverText").click(function () {
        if($(".serverText").val() === "停止服务器"){
            $(".serverText").val("开启服务器");
        }else {
            $(".serverText").val("停止服务器");
        }
    });

    //修改文字
    $("select").mouseout(function () {
        if($(".type option:selected").val() === "五星宏辉" || $(".type option:selected").val() === "百家乐二号"){
            $(".editRoom").text("房间最大玩家数：");
            $(".editNum").val("修改玩家数");
        }else {
            $(".editRoom").text("房间开放数量：");
            $(".editNum").val("修改房间数");
        }
    });
    //登陆详情
    $(".loginTime").click(function () {
        $(".mask").fadeToggle(200);
        $(".detailsList").show(200);
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".detailsList").hide(200);
    });
    //修改密码
    $(".changePwd").click(function () {
        $(".mask").fadeToggle(200);
        $(".changePwdList").show(200);
        $(".maskPages").hide(200);
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".changePwdList").hide(200);
        $(".maskPages").show(200);
    });

    //删除
    $(".remove").click(function () {
        if(confirm("确认删除？")){
            $(".del>ul").click(function () {
                $(this).remove();
            })
            return true;
        }else {
            return false;
        }
    });

});