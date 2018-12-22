$(function () {
    //1.监听一级菜单的点击事件（节点创建时使用delegate监听事件）
    $("body").delegate(".nav>li","click",function () {
        //1.1拿到二级菜单
        var $sub = $(this).children(".sub");
        //1.2让二级菜单展开
        $sub.slideDown(500);
        //1.3拿到所有非当前的二级菜单
        var other = $(this).siblings().children(".sub");
        //1.4让所有非当前二级菜单收起
        other.slideUp(500);
        //1.5让被点击的一级菜单箭头旋转
        $(this).addClass("current");
        //1.6让所有非被所有点击的一级菜单还原
        $(this).siblings().removeClass("current");
    });


    //用户操作
    $("body").delegate(".title>.rightUser", "click", function () {
        $(".dropDown").fadeToggle(500);
    })


    /*
    创建公共页面节点
     */
    //title
    var $title = $("<div class=\"title\">\n" +
        "        <div class=\"rightUser fr\">\n" +
        "            <img src=\"img/userfacebg.png\" alt=\"\">\n" +
        "            <span>admin</span>\n" +
        "            <i></i>\n" +
        "        </div>\n" +
        "        <div class=\"dropDown fr\">\n" +
        "            <ul>\n" +
        "                <li><a href='login.html'>重新登陆</a></li>\n" +
        "                <li><a href='##'>修改密码</a></li>\n" +
        "                <li><a href='login.html'>退出</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>");
    $(".content").prepend($title);
    //left
    var $left = $("<div class=\"left fl\">\n" +
        "            <ul class=\"nav\">\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    系统主页\n" +
        "                </li>\n" +
        "                <li class='userQuery'>\n" +
        "                    <i></i>\n" +
        "                    用户查询<span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='userQuery.html' class='test'>用户详情</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li class='machineAccount'>\n" +
        "                    <i></i>\n" +
        "                    服务器信息查询<span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        //"                        <li><a href='realTimeDataFishing.html'>线号数据</a></li>\n" +
        "                        <li><a href='machineAccount.html' class='oneLi'>大区机台账务查询</a></li>\n" +
        "                        <li><a href='realTimeDataOverview.html' class='twoLi'>游戏实时数据</a></li>\n" +
        "                        <li><a href='statisticsDataOverview.html' class='threeLi'>游戏数据统计</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li class='rankingList'>\n" +
        "                    <i></i>\n" +
        "                    <a href='rankingList.html' style='display: inline-block;width: 68%;'>排行榜</a><span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='rankingList.html' class='all'>总排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(2)' class='oneLi'>元宝排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(1)' class='twoLi'>金币排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(3)' class='threeLi'>玫瑰花排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(4)' class='fourLi'>核弹排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(5)' class='fiveLi'>充值金额排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(6)' class='sixLi'>赢取排行榜</a></li>\n" +
        "                        <li><a href='javascript:;' onclick='Select_User_infrom_Ranking(7)' class='sevenLi'>在线时长排行榜</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li class='prohibition'>\n" +
        "                    <i></i>\n" +
        "                    封禁/解禁<span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='prohibition.html' class='oneLi'>封禁功能</a></li>\n" +
        "                        <li><a href='forbiddenWords.html' class='twoLi'>禁言功能</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li class='machineRecharge'>\n" +
        "                    <i></i>\n" +
        "                    充值支付<span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='machineRecharge.html' class='oneLi'>大区充值查询</a></li>\n" +
        "                        <li><a href='payEnquiry.html' class='twoLi'>支付查询</a></li>\n" +
        //"                        <li><a href='cardAdd.html'>充值卡详情</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    <a href='logQuery.html'>日志查询</a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    <a href='mailAnnouncement.html'>邮件系统</a>\n" +
        "                </li>\n" +
        "                <li class='loginNotice'>\n" +
        "                    <i></i>\n" +
        "                    公告系统<span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='loginNotice.html' class='oneLi'>登陆公告</a></li>\n" +
        "                        <li><a href='gameNotice.html' class='twoLi'>游戏公告</a></li>\n" +
        //"                        <li><a href='cardAdd.html'>充值卡详情</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    <a href='shoppingMall.html'>商城概况</a>\n" +
        "                </li>\n" +
        "                <li class='incomeDaily'>\n" +
        "                    <i></i>\n" +
        "                    <a href='incomeDaily.html' style='display: inline-block;width: 68%;'>收入日报</a>\n" +
        "                    <span></span>"+
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='channelRevenue.html' class='oneLi'>渠道收入</a></li>\n" +
        "                        <li><a href='districtIncome.html' class='twoLi'>区服收入</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    <a href='onlineData.html'>在线数据</a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    <a href='vipAdmin.html'>VIP功能</a>\n" +
        "                </li>\n" +
        "                <li class='roseData'>\n" +
        "                    <i></i>\n" +
        "                    特殊道具<span></span>\n" +
        "                    <ul class=\"sub\">\n" +
        "                        <li><a href='roseData.html' class='oneLi'>玫瑰花数据汇总</a></li>\n" +
        "                        <li><a href='clearBomb.html' class='twoLi'>核弹数据汇总</a></li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <i></i>\n" +
        "                    <a href='userWarning.html'>用户预警</a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "        </div>");
    $(".pageCont").prepend($left);

    
    //弹层(元宝)
    $(".yuanBao").click(function () {
        $(".mask").fadeToggle(200);
        $(".yuanBaoList").show(200);
        $(".maskPages").show(200);
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".yuanBaoList").hide(200);
        $(".maskPages").hide(200);
    });

    //弹层(金币)
    $(".goldCoin").click(function () {
        $(".mask").fadeToggle(200);
        $(".goldCoinList").show(200);
        $(".maskPages").show(200);
    });
    $(".close").click(function () {
        $(".mask").fadeOut(200);
        $(".goldCoinList").hide(200);
        $(".maskPages").hide(200);
    });

    //封禁、解封弹框提示
    $(".implement").click(function () {
        // alert("账号封禁成功");
    });
    $(".unsealing").click(function () {
        // alert("账号解封成功");
    });

    //选项卡切换
    $(".rh_title>li").click(function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        var $li = $(".rh_cont>li").eq(index);
        $li.siblings().removeClass("show");
        $li.addClass("show");
    });

    //邮件系统全选管理
    var $vselect = $(".vselect");
    var $vsele = $(".vsele");
    $vselect.click(function () {
        var that = this;
        $vsele.each(function() { //所有的单选按钮跟随选中的多选按钮变化
            this.checked = that.checked;
        })
        $vselect.each(function(){  //所有的多选按钮跟随选中的多选按钮变化
            this.checked=that.checked;
        })
        $vsele.change(function() {
            let count = 0; //单选 按钮 个数
            $vsele.each(function() {
                if(this.checked) {
                    count ++;
                }
            })
            if(count == $vsele.length) {   //当count等于单选按钮的个数时 说明单选按钮全部选中了，此时多选按钮也该被选中
                $vselect.each(function() {
                    this.checked = true;
                })
            } else {
                $vselect.each(function() {
                    this.checked = false;
                })
            }
        });
    });
    
    //删除已发送的道具
    $(".delProp").click(function () {
        $(".propSend").remove();
    });
});
// window.onload = function () {
//     var nav = document.getElementsByClassName("nav")[0];
//     var navLi = nav.getElementsByTagName("li");
//     var navA = nav.getElementsByTagName("a");
//     for(var i = 0; i < navA.length; i++){
//         navA[i].index = i;
//         navA[i].onclick = function () {
//             this.classList.add("navActive");
//         }
//     }
// }




//后台请求玩家排行榜
function Select_User_infrom_Ranking(num) {
    SetCookie("NUM",num);
    // alert(123)
    socket = new WebSocket("ws://"+IPconf+":"+prot+"/ws/join");
    socket.onopen = function() {
        socket.send("1000"+GetCookies("UG"));
        socket.send("9077" + JSON.stringify({
            BG:"",
            UG:GetCookies("UG"),
            ST:parseInt(num),
            SID:parseInt(0),
            SN:parseInt(5),
            NUM:parseInt(15),
        }));
        socket.onmessage = function (msg) {
            var newdate="";
            for(var i=0;i<msg.data.length;i++){
                if (i>3){
                    newdate = newdate + msg.data[i];
                }
            }

            // $("#user").html("用户昵称");
            // $("#uid").html("用户Id");
            // $("#uuid").html("用户uid");
            // $("#lv").html(" 等级");
            // $("#vlv").html("Vip等级");
            // $("#yuanbao").html("元宝数量");
            // $("#moneyge").html("赠送数量（金币 ）");
            // $("#money").html("金币数量");
            // $("#atnr").html("账号");
            // $("#etml").html("设备");

            obj = toJson(newdate)
            if (obj.UMG == null) {
                alert("未查询到数据")
                return
            }
            // alert(newdate)
            // $("table:eq(0) tr:gt(0)").remove();

            SetCookie("HPlength", obj.UMG.length)

            var num = ""
            for (var i = 0; i < obj.UMG.length; i++) {
                // var tr = $("<tr>");
                num += "<ul  class='table-row'>"
                num += "<li class='table-cell'>"+obj.UMG[i].NickName+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].ZH+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].Id+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].Uid+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].Lv+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].Vip+"</li>"
                num += "<li class='table-cell yuanBao' onclick='yuanbao()' >"+obj.UMG[i].GoldN+"</li>"
                num += "<li class='table-cell goldCoin'  onclick='jinbi()'>"+obj.UMG[i].Coin+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].MG+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].HD+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].Rmb+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].YXN+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].ZXTM+"</li>"
                num += "<li class='table-cell'>"+obj.UMG[i].CallX+"</li>"
                num += "</ul>"
            }
            $("#table-body").html(num)
            socket.close()
        }
    }
}



