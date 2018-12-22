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


    //修改密码验证
    // $(".confirm").click(function () {
    //     if($(".password").val().trim().length < 1){
    //         alert("密码不能为空！");
    //         // $('.password').focus();
    //         return;
    //     }
    //
    //     var $pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
    //     var $input2 = $(".password").val();
    //     if(!$pass.test($input2)){
    //         alert('密码长度要在6~18位之间,且必须含有字母！');
    //         return;
    //     }
    //     if ($('.repeatPwd').val().trim().length < 1) {
    //         alert('请填写确认密码！');
    //         // $('#repeatPwd').focus();
    //         return;
    //     }
    //
    //     if (($('.repeatPwd').val().trim())!=($('.password').val().trim())) {
    //         alert('两次密码填写不一致！');
    //         // $('.repeatPassword').focus();
    //         return;
    //     }
    // });
});