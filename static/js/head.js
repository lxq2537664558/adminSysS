



$(function () {


   var ac =   GetCookies("ac")
     // alert(ac+"123213213213")
    if (ac == 1 ){

        var  div ="<div id='page6_jContainer1' class='tlayout_style2'><div id='page6_jContainer1_container' class='container'>" +
            "    <div id='page6_jRegion1' class='page6_jContainer1_north'>" +
            "        <div id='page6_jPanel3' class='Panel Panel_Null colorp_grain3'>" +
            "            <div id='page6_jLabel5' class='text'>当前登录用户：管理员</div></div>" +
            "        <div id='page6_jPanel1' class='Panel Panel_Null'>" +
            "            <div id='page6_jLabel1' class='text'>游戏管理系统</div>" +
            "            <div id='page6_jPanel2' class='Panel Panel_Null'>" +
            "                <div class='linkbox link_01' id='page6_jLink1'><a href='#' target='_self'>首页</a></div>" +
            "                <div class='linkbox link_01' id='page6_jLink2'><a href='#' target='_self'>修改密码</a></div>" +
            "                <div class='linkbox link_01' id='page6_jLink3'><a href='/static/html/login.html' target='_self'>重新登录</a></div>" +
            "                <div class='linkbox link_01' id='page6_jLink4'><a href='/static/html/login.html' target='_self'>退出</a></div>" +
            "                <div id='page6_jLabel2' class='text'>|</div>" +
            "                <div id='page6_jLabel3' class='text'>|</div>" +
            "                <div id='page6_jLabel4' class='text'>|</div></div></div></div>" +
            "    </div></div>" +
            "<div class='MenuH MenuH_style4' id='page6_jMenuH1'>" +
            "    <ul>" +
            "        <li  style='cursor: pointer'><a href='/static/html/home.html'><span>用户查询</span></a></li>" +
            // "        <li><a href='/static/html/banned_suer.html'><span>封禁解封</span></a></li>" +
            // "        <li><a href='/static/html/banned_to_post.html'><span>禁言解禁</span></a></li>" +
            "        <li class='has-sub'><a href='#'><span>封禁解封</span><div class='menu_arrow'></div></a>" +
            "            <ul>" +
            "                <li style='cursor: pointer' style='cursor: pointer'><a href='/static/html/banned_suer.html'><span>封禁解禁</span></a></li>" +
            "                <li  style='cursor: pointer'class='last'><a href='/static/html/banned_to_post.html'><span>禁言解禁</span></a></li>" +
            "            </ul>" +
            "        </li>" +
            // "        <li class='has-sub'><a href='#'><span>禁言解禁</span><div class='menu_arrow'></div></a>" +
            // "            <ul>" +
            // "                <li><a href='/static/html/banned_to_post.html'><span>用户禁言</span></a></li>" +
            // "                <li class='last'><a href='/static/html/Delect_banned_to_post.html'><span>用户解禁</span></a></li>" +
            // "            </ul>" +
            // "        </li>" +
            "        <li><a href='/static/html/Pay_Select.html'><span>支付查询</span></a></li>" +
            "        <li><a href='/static/html/Log_Select.html'><span>日志查询</span></a></li>" +
            // "        <li><a href='/static/html/Regional_Club.html'><span>大区汇总</span></a></li>" +
            // "        <li><a href='/static/html/Send_Eail.html'><span>邮件系统</span></a></li>" +
            // "        <li class='has-sub'><a href='#'><span>公告功能</span><div class='menu_arrow'></div></a>" +
            // "            <ul>" +
            // "                <li><a href='/static/html/Login_announcement.html'><span>登录公告</span></a></li>" +
            // "                <li class='last'><a href='/static/html/Game_announcement.html'><span>游戏公告</span></a></li>" +
            // "            </ul>" +
            // "        </li>" +
            // "        <li><a href='/static/html/Activity_function.html'><span>活动功能</span></a></li>" +
            "        <li><a href='/static/html/Online_data.html'><span>在线数据</span></a></li>" +
            "        <li><a href='/static/html/Lncome_Daily.html'><span>收入日报</span></a></li>" +
            // "        <li><a href='/static/html/VIP_Function.html'><span>VIP功能</span></a></li>" +
            // "        <li class='has-sub'><a href='#'><span>商城概况</span><div class='menu_arrow'></div></a>" +
            // "            <ul>" +
            // "                <li><a href='/static/html/Shopping_Goods.html'><span>商城商品</span></a></li>" +
            // "                <li class='last'><a href='/static/html/Mall_Consumption.html'><span>商品消耗</span></a></li>" +
            // "            </ul>" +
            // "        </li>" +
            "        <li><a href='/static/html/Mall_Consumption.html'><span>商城概况</span></a></li>" +
            "        <li class='has-sub'><a href='#'><span>特殊道具</span><div class='menu_arrow'></div></a>" +
            "            <ul>" +
            "                <li><a href='/static/html/For_Nuclear_Bomb.html'><span>核弹数据汇总</span></a></li>" +
            "                <li><a href='/static/html/Increase_The_Bomb.html'><span>玫瑰花数据汇总</span></a></li>" +
            //"                <li class='last'><a href='/static/html/Using_The_Betails.html'><span>使用详情</span></a></li>" +
            "            </ul>" +
            "        </li>" +
            //"        <li><a href='/static/html/Using_The_Betails.html'><span>核弹使用详情</span></a></li>" +
            // "        <li><a href='/static/html/Plot_Details.html'><span>小区详情</span></a></li>" +
            // "        <li class='has-sub'><a href='#'><span>充值卡详情</span><div class='menu_arrow'></div></a>" +
            // "            <ul>" +
            // "                <li><a href='/static/html/Recharge_Card_Generation.html'><span>充值卡生成</span></a></li>" +
            // "                <li class='last'><a href='/static/html/Charge_card_details.html'><span>充值卡详情</span></a></li>" +
            // "            </ul>" +
            // "        </li>" +
            // "        <li class='last'><a href='/static/html/Generalize.html'><span>推广明细</span></a></li>" +
            "    </ul>" +
            "</div>"
        $("#head").html(div)




    }else {
        var  div ="<div id='page6_jContainer1' class='tlayout_style2'><div id='page6_jContainer1_container' class='container'>" +
            "    <div id='page6_jRegion1' class='page6_jContainer1_north'>" +
            "        <div id='page6_jPanel3' class='Panel Panel_Null colorp_grain3'>" +
            "            <div id='page6_jLabel5' class='text'>当前登录用户：管理员</div></div>" +
            "        <div id='page6_jPanel1' class='Panel Panel_Null'>" +
            "            <div id='page6_jLabel1' class='text'>游戏管理系统</div>" +
            "            <div id='page6_jPanel2' class='Panel Panel_Null'>" +
            "                <div class='linkbox link_01' id='page6_jLink1'><a href='#' target='_self'>首页</a></div>" +
            "                <div class='linkbox link_01' id='page6_jLink2'><a href='#' target='_self'>修改密码</a></div>" +
            "                <div class='linkbox link_01' id='page6_jLink3'><a href='/static/html/login.html' target='_self'>重新登录</a></div>" +
            "                <div class='linkbox link_01' id='page6_jLink4'><a href='/static/html/login.html' target='_self'>退出</a></div>" +
            "                <div id='page6_jLabel2' class='text'>|</div>" +
            "                <div id='page6_jLabel3' class='text'>|</div>" +
            "                <div id='page6_jLabel4' class='text'>|</div></div></div></div>" +
            "    </div></div>" +
            "<div class='MenuH MenuH_style4' id='page6_jMenuH1'>" +
            "    <ul>" +
            "        <li><a href='/static/html/home.html'><span>用户查询</span></a></li>" +
            // "        <li><a href='/static/html/banned_suer.html'><span>封禁解封</span></a></li>" +
            // "        <li><a href='/static/html/banned_to_post.html'><span>禁言解禁</span></a></li>" +
            "        <li class='has-sub'><a href=''><span>封禁解封</span><div class='menu_arrow'></div></a>" +
            "            <ul>" +
            "                <li><a href='/static/html/banned_suer.html'><span>封禁解禁</span></a></li>" +
            "                <li class='last'><a href='/static/html/banned_to_post.html'><span>禁言解禁</span></a></li>" +
            "            </ul>" +
            "        </li>" +
            // "        <li class='has-sub'><a href='#'><span>禁言解禁</span><div class='menu_arrow'></div></a>" +
            // "            <ul>" +
            // "                <li><a href='/static/html/banned_to_post.html'><span>用户禁言</span></a></li>" +
            // "                <li class='last'><a href='/static/html/Delect_banned_to_post.html'><span>用户解禁</span></a></li>" +
            // "            </ul>" +
            // "        </li>" + v
            "        <li><a href='/static/html/Pay_Select.html'><span>支付查询</span></a></li>" +
            "        <li><a href='/static/html/Log_Select.html'><span>日志查询</span></a></li>" +
            // "        <li><a href='/static/html/Regional_Club.html'><span>大区汇总</span></a></li>" +
            "        <li><a href='/static/html/Send_Eail.html'><span>邮件系统</span></a></li>" +
            "        <li class='has-sub'><a href='#'><span>公告功能</span><div class='menu_arrow'></div></a>" +
            "            <ul>" +
            "                <li><a href='/static/html/Login_announcement.html'><span>登录公告</span></a></li>" +
            "                <li class='last'><a href='/static/html/Game_announcement.html'><span>游戏公告</span></a></li>" +
            "            </ul>" +
            "        </li>" +
            // "        <li><a href='/static/html/Activity_function.html'><span>活动功能</span></a></li>" +
            "        <li><a href='/static/html/Online_data.html'><span>在线数据</span></a></li>" +
            "        <li><a href='/static/html/Lncome_Daily.html'><span>收入日报</span></a></li>" +
            "        <li><a href='/static/html/VIP_Function.html'><span>VIP功能</span></a></li>" +
            // "        <li class='has-sub'><a href='#'><span>商城概况</span><div class='menu_arrow'></div></a>" +
            // "            <ul>" +
            // "                <li><a href='/static/html/Shopping_Goods.html'><span>商城商品</span></a></li>" +
            // "                <li class='last'><a href='/static/html/Mall_Consumption.html'><span>商品消耗</span></a></li>" +
            // "            </ul>" +
            // "        </li>" +
            "        <li><a href='/static/html/Mall_Consumption.html'><span>商城概况</span></a></li>" +
            "        <li class='has-sub'><a href='#'><span>特殊道具</span><div class='menu_arrow'></div></a>" +
            "            <ul>" +
            "                <li><a href='/static/html/For_Nuclear_Bomb.html'><span>核弹数据汇总</span></a></li>" +
            "                <li><a href='/static/html/Increase_The_Bomb.html'><span>玫瑰花数据汇总</span></a></li>" +
            //"                <li class='last'><a href='/static/html/Using_The_Betails.html'><span>使用详情</span></a></li>" +
            "            </ul>" +
            "        </li>" +
            //"        <li><a href='/static/html/Using_The_Betails.html'><span>核弹使用详情</span></a></li>" +
            // "        <li><a href='/static/html/Plot_Details.html'><span>小区详情</span></a></li>" +
            "        <li class='has-sub'><a href='#'><span>充值卡详情</span><div class='menu_arrow'></div></a>" +
            "            <ul>" +
            "                <li><a href='/static/html/Recharge_Card_Generation.html'><span>充值卡生成</span></a></li>" +
            "                <li class='last'><a href='/static/html/Charge_card_details.html'><span>充值卡详情</span></a></li>" +
            "            </ul>" +
            "        </li>" +
            // "        <li class='last'><a href='/static/html/Generalize.html'><span>推广明细</span></a></li>" +
            "    </ul>" +
            "</div>"
        $("#head").html(div)

    }



   //
   //  var  ace = ""+
   //      "<div class='xuesheng2 ' style='cursor: pointer'><img  class='img 'src='/static/new/images/index/u10.png'style='margin-left: -5px'/><span style='margin-left: 5px'>用户查询</span></div><hr>"+
   //
   //  "<div class='xuesheng1 ' style='cursor: pointer'><img  class='img ' src='/static/new/images/index/u82.png' style='margin-left: -5px'/><span style='margin-left: 5px'>服务器信息查询</span> <img  class='img_001 'src='/static/new/images/index/u14.png' style='margin-left: 25px'/></div>"+
   // "<ul  id='shishis'><li onclick='shi0001()'  style='cursor: pointer'>实时数据</li>" +
   //  "<li onclick='shi0002()' style='margin-top: 10px' style='cursor: pointer'>数据统计</li></ul><hr>"+
   //  "<div class='xuesheng1 ' style='cursor: pointer'><img  class='img '  src='/static/new/images/index/u64.png'style='margin-left: -5px'/><span style='margin-right: 10px'>排行榜</span><img  class='img_001 'src='/static/new/images/index/u14.png' style='margin-left: 85px'/></div>"+
   //  "<ul>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>元宝排行榜</li>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>金币排行榜</li>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>核弹排行榜</li>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>玫瑰花排行榜</li>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>充值排行榜</li>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>赢取排行榜</li>"+
   //      "<li style='cursor: pointer' onclick='paihangbang_0001()'>在线时长排行榜</li></ul><hr>"+
   //
   //
   //  "<div class='xuesheng1 ' style='cursor: pointer'><img  class='img 'src='/static/new/images/index/u16.png'style='margin-left: -5px'/><span style='margin-right: 10px'>封禁解封</span><img  class='img_001 'src='/static/new/images/index/u14.png'style='margin-left: 65px'/></div>"+
   //  "<ul>"+
   //      "<li style='cursor: pointer' onclick='fengjinjiefeng()'>封禁解封</li>"+
   //      "<li style='cursor: pointer' onclick='jinyanjiejin()'>禁言解禁</li></ul>"+
   //
   //
   //
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='zhifuchaxun()'><img  class='img 'src='/static/new/images/index/u20.png'style='margin-left: -5px'/><span style='margin-left: 5px'>支付查询</span></div>"+
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='rizhchanxun()'><img  class='img 'src='/static/new/images/index/u24.png'style='margin-left: -5px'/><span style='margin-left: 5px'>日志查询</span></div>"+
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='youjianchaxun()'><img  class='img 'src='/static/new/images/index/u30.png'style='margin-left: -5px'/><span style='margin-left: 5px'>邮件系统</span></div>"+
   //
   //      "<hr><div class='xuesheng1 ' style='cursor: pointer'><img  class='img 'src='/static/new/images/index/u34.png'style='margin-left: -5px'/><span style='margin-left: 5px'>公告功能</span><img  class='img_001 'src='/static/new/images/index/u14.png'style='margin-left: 65px'/></div>"+
   //      "<ul>"+
   //      "<li style='cursor: pointer' onclick='gonggaonengnnegdenglugonggao()'>登录公告</li>"+
   //      "<li style='cursor: pointer' onclick='youxigonggao()'>游戏公告</li></ul>"+
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='zaixianshuju()'><img  class='img 'src='/static/new/images/index/u36.png'style='margin-left: -5px'/><span style='margin-left: 5px'>在线数据</span></div>"+
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='shourourubao()'><img  class='img 'src='/static/new/images/index/收入.png'style='margin-left: -5px'/><span style='margin-left: 5px'>收入日报</span></div>"+
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='vipgongneng()'><img  class='img 'src='/static/new/images/index/VIP.png'style='margin-left: -5px'/><span style='margin-left: 5px'>VIP功能</span></div>"+
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='shancgenggaikuangh()'><img  class='img 'src='/static/new/images/index/商城 .png'style='margin-left: -5px'/><span style='margin-left: 5px'>商城概况</span></div>"+
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng1 '><img  class='img 'src='/static/new/images/index/道具 .png'style='margin-left: -5px'/><span style='margin-left: 9px'>特殊道具</span><img  class='img_001 'src='/static/new/images/index/u14.png'style='margin-left: 59px'/></div>"+
   //      "<ul>"+
   //      "<li style='cursor: pointer' onclick='hedanshujuhuizong()'>玫瑰花数据汇总</li>"+
   //      "<li style='cursor: pointer' onclick='meiguihuashujuhuizionfg()'>核弹数据汇总</li></ul>"+
   //
   //      "<hr><div class='xuesheng1 ' style='cursor: pointer' ><img  class='img 'src='/static/new/images/index/充值卡.png'style='margin-left: -5px'/><span style='margin-left: 5px'>充值卡详情</span><img  class='img_001 'src='/static/new/images/index/u14.png'style='margin-left: 47px'/></div>"+
   //      "<ul>"+
   //      "<li style='cursor: pointer' onclick='chongzhikashengcheng()'>充值卡生成</li>"+
   //      "<li style='cursor: pointer' onclick='chongzhikaxiangqiang()'>充值卡详情</li></ul>"+
   //
   //      "<hr><div style='cursor: pointer' class='xuesheng2 ' onclick='wanjiayujing()'><img  class='img 'src='/static/new/images/index/gth.png'style='margin-left: -5px;width: 32px;height: 21px'/><span style='margin-left: 5px'>用户预警</span></div>"
   //
   //
   //
   //  $(".acsdsdsd12").html(ace)
   //


//     //  先将第二个和最后一个隐藏
//     $("ul").hide();
//     $(".xuesheng1").click(function(){
//
// //      console.log($(this));
// //这里选中的div,而我们要隐藏的是ul,所以要用next()
//         var ul= $(this).next()
//
//
//         //
//         // $("ul:eq(1),ul:last-child").hide();
//         // $("#shishis").children('ul').eq(1).html("123123213213213");
//         // $("#shishis").children("ul").eq(1).html("87687687687678")
//         // $(this) = "images/index/u888.png"
//         // $("img").attr("src","02.png");
//        // function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)}
//        // function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)}
//
//         // alert(this)
//         if(ul.is(":hidden")){
//
//             // alert(ul.eq(1).html)
//             ul.slideDown();
//         }else{
//             // alert(567)
//
//             ul.hide();
//         }
//     })
//
//     var click_ul= $(this).next();
//     if(click_ul.is(":hidden")){
// //          在让点击的ul显示的时候,需要将所有的ul先隐藏
//         $("ul").hide();
//         click_ul.slideDown();
//     }else{
//         click_ul.hide();
//     }
//     $('#xuesheng1 ul').each(
//         function()
//         {
//             $(this).children('li').eq(1).hide();
//         }
//     );

    //     <hr>
    //     <div class="xuesheng2 "><img  class="img " src="images/index/u24.png" style="margin-left: -5px"/><span style="margin-left: 5px">日志查询</span></div>
    //
    // <hr>
    // <div class="xuesheng2 "><img  class="img " src="images/index/u30.png" style="margin-left: -5px"/><span style="margin-left: 5px">邮件系统</span></div>
    // <hr>
    // <div class="xuesheng1 "><img  class="img " src="images/index/u34.png" style="margin-left: -5px"/><span style="margin-left: 5px">公告功能</span><img  class="img_001 " src="images/index/u14.png"  style="margin-left: 47px"/></div>
    // <ul>
    // <li>登录公告</li>
    // <li>游戏公告</li>
    // </ul>
    // <hr>
    //     <div class="xuesheng2 "><img  class="img " src="images/index/u36.png" style="margin-left: -5px"/><span style="margin-left: 5px">在线数据</span></div>
    //     <hr>
    //
    //         <div class="xuesheng2 "><img  class="img " src="images/index/收入.png" style="margin-left: -5px"/><span style="margin-left: 5px">收入日报</span></div>
    //         <hr>
    //
    //             <div class="xuesheng2 "><img  class="img " src="images/index/VIP.png" style="margin-left: -5px"/><span style="margin-left: 5px">VIP功能</span></div>
    //             <hr>
    //
    //                 <div class="xuesheng2 "><img   src="images/index/商城 .png" style="margin-left: -5px"/><span style="margin-left: 5px">商城概况</span></div>
    //                 <hr>
    //
    //                     <div class="xuesheng1 "><img  class="img " src="images/index/道具 .png" style="margin-left: -5px"/><span style="margin-left: 5px">特殊道具</span><img  class="img_001 " src="images/index/u14.png" style="margin-left: 41px"/></div>
    //                     <ul>
    //                         <li>玫瑰花数据汇总</li>
    //                         <li>核弹数据汇总</li>
    //                     </ul>
    //                     <hr>
    //
    //                         <div class="xuesheng1 "><img  class="img " src="images/index/充值卡.png" style="margin-left: -5px"/><span style="margin-left: 5px">充值卡详情</span><img  class="img_001 " src="images/index/u14.png" style="margin-left: 24px"/></div>
    //                         <ul>
    //                             <li>充值卡生成</li>
    //                             <li>充值卡详情</li>
    //                         </ul>
    //                         <hr>
    //
    //                             <div class="xuesheng2 "><img   src="images/index/商城 .png" style="margin-left: -5px"/><span style="margin-left: 5px">用户预警</span></div>"


})





//用户请求实时数据
function shi0001() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/game_gpu.html"
}

//用户请求实时数据
function shi0002() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/data_statistics.html"
}



//用户请求排行榜
function paihangbang_0001() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/paihangbang.html?st =1"

}
//客户端请求封禁 解禁

function  fengjinjiefeng () {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/banned_suer.html"
}


//禁言 解禁
function jinyanjiejin() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/banned_to_post.html"

}


//支付查询
function zhifuchaxun() {


    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Pay_Select.html"
}


//日志查询
function rizhchanxun() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Log_Select.html"
}


//邮件查询
function youjianchaxun() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Send_Eail.html"
}



//公告功能
function gonggaonengnnegdenglugonggao() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Login_announcement.html"

}

//游戏公告
function youxigonggao() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Game_announcement.html"
}

//在线数据
function zaixianshuju() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Online_data.html"

}

//收入日报
function shourourubao() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Lncome_Daily.html"

}


//VIP功能
function vipgongneng() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/VIP_Function.html"

}

//商城概况
function shancgenggaikuangh() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Mall_Consumption.html"
}

//核弹数据汇总
function hedanshujuhuizong() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Increase_The_Bomb.html"
}

//玫瑰花数据汇总
function meiguihuashujuhuizionfg() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/For_Nuclear_Bomb.html"
}

//充值卡生成
function chongzhikashengcheng() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Recharge_Card_Generation.html"

}

//充值卡详情
function chongzhikaxiangqiang() {

    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/Charge_card_details.html"
}

//玩家预警
function wanjiayujing() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/h5/wanjaiyujing.html"


}



//跳转系统主页
function zhuye_00000123() {
    window.location.href = "http://"+IPconf+":"+prot+"/static/new/index.html"
}


function  tablse(num) {


    if (num == 1 ){

        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        var  div_102  = " <button style='float: left;background-color:#31314f ' class='batton_0112 jingdiandiv_100101' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113 jingdiandiv_100101' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114 jingdiandiv_100101' onclick='gaojichang()'>高级场</button><br><br>"
        div = div+div_102

        $(".batton_0112").css("background-color","#31314f")
        for (var i= 1 ;i<= 200 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_timeaw
            cha += num_count

            if   (cha>0){
                var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                    "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                    " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                    "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                    " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs

            }

        }

    }else {


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0





        for (var i= 1 ;i<= 200 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if   (cha>0){
                var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                    "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                    " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                    "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                    " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs

            }

        }

    }




    $("#room_count").html(div)

    $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
    $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-15)

}







function gegefangjian(num) {

    if  (GetCookies("jingdianyafen") == 1)  {  //经典压分


        $(".jingdiandiv4").html("")
        $(".jingdiandiv5").html("")
        $(".jingdiandiv1").html("金鲨银鲨")
        $(".jingdiandiv2").html("豪车竞技")
        $(".jingdiandiv3").html("森林舞会")


        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")


            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")
            $("#room_count").css("display","block")
            $("#table").css("display","none")
            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var  div_102  = " <br><button style='float: left;background-color:#31314f ' class='batton_0112 jingdiandiv_100101' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113 jingdiandiv_100101' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114 jingdiandiv_100101' onclick='gaojichang()'>高级场</button><br><br>"
            div = div+div_102
            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }




            $("#room_count").html(div)

            $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-15)


            $(".batton_0112").css("background-color","#46466b")
            $(".batton_0113").css("background-color","#f0f3f6")
            $(".batton_0114").css("background-color","#f0f3f6")

        }else  if(num== 2 )  {

            $("#gridtable_000123").css("display","block")
            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")

            $("#jingdian").css("display","none")

            $(".diceng").css("display","none")

            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")

            $("#table").css("display","none")

            $("#zongnanyincang").css("display","none")

        }


    }else  if(GetCookies("jingdianyafen") == 4){  //百人系列


        $(".jingdiandiv1").html("家家乐")
        $(".jingdiandiv2").html("欢乐牌机")
        $(".jingdiandiv3").html("黑红梅方")

        $(".jingdiandiv4").html("拼三张")
        $(".jingdiandiv5").html("红蓝大战")


        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")
            $("#room_count").css("display","block")

            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")

            $("#table").css("display","none")
            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            var  div_102  = "<br> <button style='float: left;background-color:#31314f ' class='batton_0112 jingdiandiv_100101' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113 jingdiandiv_100101' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114 jingdiandiv_100101' onclick='gaojichang()'>高级场</button><br><br>"
            div = div+div_102
            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }

            $(".batton_0112").css("background-color","#46466b")
            $(".batton_0113").css("background-color","#f0f3f6")
            $(".batton_0114").css("background-color","#f0f3f6")
            $("#room_count").html(div)

            $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-15)

            $(".batton_0112").css("background-color","#31314f")


        }else  if(num== 2 )  {


            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")

            // $("#jingdian").css("display","none")

            // $(".diceng").css("display","none")

            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")

            $("#table").css("display","block")

            $("#zongnanyincang").css("display","none")

        }

    }else  if(GetCookies("jingdianyafen") == 5){  //百人系列


        $(".jingdiandiv1").html("水浒")
        $(".jingdiandiv2").html("")
        $(".jingdiandiv3").html("旺宝")

        $(".jingdiandiv4").html("")
        $(".jingdiandiv5").html("")


        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")
            $("#room_count").css("display","block")

            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")

            $("#table").css("display","none")
            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            var  div_102  = "<br> <button style='float: left;background-color:#31314f ' class='batton_0112 jingdiandiv_100101' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113 jingdiandiv_100101' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114 jingdiandiv_100101' onclick='gaojichang()'>高级场</button><br><br>"
            div = div+div_102
            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }

            $(".batton_0112").css("background-color","#46466b")
            $(".batton_0113").css("background-color","#f0f3f6")
            $(".batton_0114").css("background-color","#f0f3f6")
            $("#room_count").html(div)

            $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-35)


            $(".batton_0112").css("background-color","#31314f")

        }else  if(num== 2 )  {


            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")

            // $("#jingdian").css("display","none")

            // $(".diceng").css("display","none")

            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")

            $("#table").css("display","block")

            $("#zongnanyincang").css("display","none")

        }

    }else {


        $(".jingdiandiv1").html("初级场")
        $(".jingdiandiv2").html("中级场")
        $(".jingdiandiv3").html("高级场")


        $(".jingdiandiv4").html("")
        $(".jingdiandiv5").html("")
        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")


            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")
            $("#room_count").css("display","block")
            $("#table").css("display","none")

            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }

            $("#room_count").html(div)

            $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-15)



        }else  if(num== 2 )  {


            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")

            $("#jingdian").css("display","none")

            // $(".diceng").css("display","none")

            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")

            $("#table").css("display","block")

            $("#zongnanyincang").css("display","none")

        }

    }
}




var  dataic = 1

function gegefangjian_date(num) {

    if (num == 1 ){  //各个房间
        $("#chart1").css("display","none")
        $(".TJChart").css("display","none")

    }else {
        $("#chart1").css("display","block")
        $(".TJChart").css("display","block")
    }



    if  (GetCookies("jingdianyafen") == 1)  {  //经典压分


        $(".jingdiandiv4").html("")
        $(".jingdiandiv5").html("")
        $(".jingdiandiv1").html("金鲨银鲨")
        $(".jingdiandiv2").html("豪车竞技")
        $(".jingdiandiv3").html("森林舞会")

        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")


            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")
            $("#room_count").css("display","block")
            $("#table").css("display","none")
            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            $("#jingdian").css("margin-top","-887px")

            // var  div_102  = " <br><button style='float: left;background-color:#31314f ' class='batton_0112' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114' onclick='gaojichang()'>高级场</button><br><br>"
            // div = div+div_102
            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }

            $("#table").css("display","none")


            $("#room_count").html(div)
            $(".diceng").css("display","block")
            // $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-20)

            $(".diceng").css("margin-top","197.838.px")
            $(".batton_0112").css("background-color","#46466b")
            $(".batton_0113").css("background-color","#f0f3f6")
            $(".batton_0114").css("background-color","#f0f3f6")

        }else  if(num== 2 )  {


            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")


            $("#jingdian").css("display","block")

            $("#jingdian").css("margin-top","-563px")


            // $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-20)
            $(".diceng").css("display","block")
            $(".diceng").css("margin-top","192.838.px")
            // alert(123213)
            // if (dataic == 1 ){
            //     dataic = 2
            //     gegefangjian_date(num)
            // }else {
            //     dataic = 1
            // }





            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")


            $("#gridtable_000123").css("display","block")
            $("#zongnanyincang").css("display","none")

        }


    }else  if(GetCookies("jingdianyafen") == 4){  //百人系列


        $(".jingdiandiv1").html("家家乐")
        $(".jingdiandiv2").html("欢乐牌机")
        $(".jingdiandiv3").html("黑红梅方")

        $(".jingdiandiv4").html("拼三张")
        $(".jingdiandiv5").html("红蓝大战")


        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")
            $("#room_count").css("display","block")

            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")

            $("#table").css("display","none")
            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            // var  div_102  = " <button style='float: left;background-color:#31314f ' class='batton_0112' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114' onclick='gaojichang()'>高级场</button><br><br>"
            // div = div+div_102
            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }


            $("#room_count").html(div)


            $(".batton_0112").css("background-color","#46466b")
            $(".batton_0113").css("background-color","#f0f3f6")
            $(".batton_0114").css("background-color","#f0f3f6")

            $(".diceng").css("margin-top","206.383.px")
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-15)

            $(".batton_0112").css("background-color","#31314f")
            $("#jingdian").css("margin-top","-887px")


            if (dataic == 1) {
                dataic = 2
                gegefangjian_date(num)
            }

        }else  if(num== 2 )  {


            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")
            //
            $("#jingdian").css("margin-top","-555px")


            $(".diceng").css("margin-top","206.383.px")
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-15)
            $("#diceng_copy").css("display","block")
            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")

            $("#table").css("display","none")

            $("#zongnanyincang").css("display","none")


            $("#gridtable_000123").css("display","block")


        }

    }else  if(GetCookies("jingdianyafen") == 5){  //百人系列


        $(".jingdiandiv1").html("水浒")
        $(".jingdiandiv2").html("")
        $(".jingdiandiv3").html("旺宝")

        $(".jingdiandiv4").html("")
        $(".jingdiandiv5").html("")


        if(num== 1 ) {




            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")
            $("#room_count").css("display","block")

            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")

            $("#table").css("display","none")
            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            // var  div_102  = " <button style='float: left;background-color:#31314f ' class='batton_0112' onclick='chujichang()'> 初级场</button><button style='float: left' class='batton_0113' onclick='zhongjichang()'>中级场</button><button style='float: left' class='batton_0114' onclick='gaojichang()'>高级场</button><br><br>"
            // div = div+div_102
            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }

            $(".batton_0112").css("background-color","#46466b")
            $(".batton_0113").css("background-color","#f0f3f6")
            $(".batton_0114").css("background-color","#f0f3f6")
            $("#room_count").html(div)

            // alert(123)

            $("#jingdian").css("margin-top","-887px")



            // $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-35)

            $(".diceng").css("margin-top","197.838.px")
            $(".batton_0112").css("background-color","#31314f")

        }else  if(num== 2 )  {   //总览
            // alert(546)

            $("#zongnanyincang").css("display","none")

            $("#room_count").css("display","none")

            $("#gridtable_000123").css("display","block")
            $("#jingdian").css("display","block")
            $(".diceng").css("display","block")

            // $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-35)
            $(".diceng").css("margin-top","197.838.px")

            $(".zong2").css("background-color","#31314f")

            $(".zong1").css("background-color","#46466b")

            $("#table").css("display","none")

            $("#zongnanyincang").css("display","none")
            $("#jingdian").css("margin-top","-563px")

            // alert(546)

        }

    }else {   //  各个房间 没有概要  总览有概要


        if(num== 1 ) {

            // $(".jingdiandiv1").html("概要")
            $(".jingdiandiv1").html("初级场")
            $(".jingdiandiv2").html("中级场")
            $(".jingdiandiv3").html("高级场")


            $(".jingdiandiv4").html("")
            $(".jingdiandiv5").html("")


            $(".zong1").css("background-color","#31314f")

            $(".zong2").css("background-color","#46466b")

            // $("#jingdian").css("display","block")
            // $(".diceng").css("display","block")
            //
            // $('.jingdiandiv2' ).css("color","#0a0a0a")
            // $('.jingdiandiv3' ).css("color","#0a0a0a")


            $('.jingdiandiv1' ).css("color","#dce1e5")

            $("#zongnanyincang").css("display","block")
            $("#room_count").css("display","block")
            $("#table").css("display","none")

            $("#gridtable_000123").css("display","none")


            $("#table").css("display","none")

            var div  = ""
            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            $("#jingdian").css("margin-top","-887px")

            for (var i= 1 ;i<= 200 ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if   (cha>0){
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px;'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane> <br><span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #00FF00'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }else {
                    var divs = "<div class='span2 box-quick-link blue-background'  style='float: left;border: #0a0a0a solid 1px'><div style='height: 15px;background-color:rgb(70, 70, 107);width: 200px;float: left'></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color: rgba(38, 38, 81, 1);line-height: 50px;width: 200px'>" +
                        "<span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'>进币数量： <span>"+count_time+" </span></spane><br>" +
                        " <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 出币数量：<span >"+num_count+"</span></spane><br> <span style='font-size: 13px;margin-left: 20px;color: #f0f3f6'> 盈利：<span  style='color: #f34541'>"+cha+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content' style='margin-left: 50px;color: #f0f3f6'>捕鱼"+i+"号房间</div>" +
                        "                    </a>" +
                        "                </div>"
                    div = div+divs

                }

            }

            $("#room_count").html(div)

            $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-25)

        // alert(123)

        }else  if(num== 2 )  {
            // $("#ac12322").css("background-color","#31314f")
            // $("#u125_div").css("background-color","#46466b")
            //
            // $("#u123_div").css("background-color","#31314f")
            // $("#u127_div").css("background-color","#31314f")
            // $("#ac12321").css("background-color","#31314f")

            $("#table_00001").css("background-color","#46466b")

            SetCookie("jingdianyafen",0)
            $("#table").css("display","block")

            $("#zongnanyincang").css("display","none")
            $("#room_count").css("display","none")

            // $(".diceng").css("display","none")

            $("#jingdiandiv_10010").css("display","none")

            $("#gridtable_000123").css("display","none")

            var myDate = new Date();

            myDate.getFullYear();
            myDate.getMonth();
            myDate.getDate();

            myDate.getHours();
            myDate.getMinutes();
            myDate.getSeconds();

            var my =  myDate.getMonth()+1
            var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds();
            // $("#Gvip").html(date_copy)
            num = []
            count_time = []

            count_cha  = []
            var date_copy_sw  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+"  00:00:00";

            $("#page5_jDateTimePicker1_edit").val(date_copy_sw);




            $("#page5_jDateTimePicker3_edit").val(date_copy);




            for (var i  = 0; i <12 ;i++){

                count_time.push( GetRandomNum(100000, 10000000))
            }

            for (var i  = 0; i <12 ;i++){

                num.push(  GetRandomNum(100000, 10000000))
            }

            for (var i  = 0; i <12 ;i++){
                count_cha.push(  count_time[i]- num[i])
            }



            $(".jingdiandiv1").html("概要")
            $(".jingdiandiv2").html("初级场")
            $(".jingdiandiv3").html("中级场")
            $(".jingdiandiv4").html("高级场")
            $(".jingdiandiv5").html("")
            $("#jingdian").css("margin-top","-560px")
            $("#table").css("display","none")
            document.getElementById("gridtable_000123").style.display = 'block'
            $(".diceng").css("margin-top",$('.jingdiandiv1' ).offset().top+28)
            $(".diceng").css("margin-left",$('.jingdiandiv1' ).offset().left-25)
        }

    }
}











//初级场
function chujichang() {

        // alert(123)
    $(".batton_0112").css("background-color","#46466b")
    $(".batton_0113").css("background-color","#f0f3f6")
    $(".batton_0114").css("background-color","#f0f3f6")




}

//中级场
function zhongjichang() {
    // alert(456)
    $(".batton_0112").css("background-color","#f0f3f6")
    $(".batton_0113").css("background-color","#46466b")
    $(".batton_0114").css("background-color","#f0f3f6")
}


//高级场
function gaojichang(){
    $(".batton_0112").css("background-color","#f0f3f6")
    $(".batton_0113").css("background-color","#f0f3f6")
    $(".batton_0114").css("background-color","#46466b")
    // alert(789)
}






