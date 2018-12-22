




function bairenpinsanzhang() {
        // alert(123)


    // Gvip  /当前时间
    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
    $("#Gvip").html(date_copy)



    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 30 ;i++){

         var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count <0) {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人拼三张"+i+"</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs
        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人拼三张"+i+"</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs
        }

    }

    div += "<div class='border_buttion'><button onclick='pinsanzhangchuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='pinsanzhangchuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='pinsanzhangchuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    $("#GPU_diV_01").html(div)

}



function pinsanzhangchuzhonggao (num) {

    if (num == 2 ){

    // Gvip  /当前时间
    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
    $("#Gvip").html(date_copy)



    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 30 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (num_count <0) {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #148f77'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人拼三张"+i+"</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs
        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #148f77'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人拼三张"+i+"</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs
        }




    }
        div += "<div class='border_buttion'><button onclick='pinsanzhangchuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='pinsanzhangchuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='pinsanzhangchuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        $("#GPU_diV_01").html(div)
    }else if (num == 3 ) {

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
        $("#Gvip").html(date_copy)



        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count
            if  (num_count <0) {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人拼三张"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人拼三张"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }

        }

        div += "<div class='border_buttion'><button onclick='pinsanzhangchuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='pinsanzhangchuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='pinsanzhangchuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        $("#GPU_diV_01").html(div)


    }else {

        // Gvip  /当前时间
        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
        $("#Gvip").html(date_copy)



        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count <0) {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人拼三张"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人拼三张"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }

        }

        div += "<div class='border_buttion'><button onclick='pinsanzhangchuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='pinsanzhangchuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='pinsanzhangchuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        $("#GPU_diV_01").html(div)



    }





}




//请求隐藏div
function Noet_div() {
    document.getElementById("div_123456").style.display = "none";
}


//请求拼三张服务器数据
function bairenpinsanzhang_001(mag) {
        // alert(123)

    var  zhuangying =0
    var  zhuangSshu  =0

    var  qinglongsheng  =0
    var  qinglongfu  =0

    var  zhuquesheng  =0
    var  zhuqueu  =0

    var  xuanwusheng  =0
    var  xuanwufu  =0

    var  baihusheng  =0
    var  baihufu  =0


    var  baizi1 =0
    var  shunjin1 =0
    var  jinhua1 =0
    var  shunzi1 =0
    var  duizi1 =0
    var  sanpai1 =0




    socket = new WebSocket("ws://"+IPconf+":"+prot+"/ws/join");
    socket.onopen = function() {
        socket.send("1000"+GetCookies("UG"));
        socket.send("9071" + JSON.stringify({
            UG:GetCookies("UG"),
            RM:mag
        }));
        socket.onmessage = function (msg) {
            var newdate="";
            for(var i=0;i<msg.data.length;i++){
                if (i>3){
                    newdate = newdate + msg.data[i];
                }
            }
            obj = toJson(newdate)
             // alert(obj.RM)
            for(var i = 0 ; i<obj.RM.length;i++ ){
                zhuangying += obj.RM[i].Win
                zhuangSshu += obj.RM[i].Los

                if (obj.RM[i].Tp[0] == 1 ) {
                    qinglongsheng ++
                }else{
                    qinglongfu++
                }

                if (obj.RM[i].Tp[1] == 1 ) {
                    zhuquesheng++
                }else{
                    zhuqueu++
                }

                if (obj.RM[i].Tp[2] == 1 ) {
                    xuanwusheng++
                }else{
                    xuanwufu++
                }
                if (obj.RM[i].Tp[3] == 1 ) {
                    baihusheng++
                }else{
                    baihufu++
                }

                for(var j = 0;j < 5;j++){

                    if (obj.RM[i].Px[j] == 1 ) {

                        baizi1++
                    }
                    if (obj.RM[i].Px[j] == 2 ) {
                        shunjin1++
                    }
                    if (obj.RM[i].Px[j] == 3 ) {
                        jinhua1++
                    }
                    if (obj.RM[i].Px[j] == 4 ) {
                        shunzi1++
                    }
                    if (obj.RM[i].Px[j] == 5 ) {
                        duizi1++
                    }
                    //alert(obj.RM[i].Px[j])
                    if (obj.RM[i].Px[j] == 6  || obj.RM[i].Px[j] == 7 ) {
                        sanpai1++
                    }

                }

            }

//            alert(duizi1+"========="+sanpai1)
            var div = "<div style='width: 100%;height: 100%;background-color: #1e2a4c; background-color:rgba(0,0,0,0.3) ;position: absolute' id='div_123456'> " +
                "<div style='background-color: #00acec;width: 30px;height: 20px;margin-left: 75.7%;margin-top: 10%' onclick='Noet_div()'>关闭</div>" +
                "<div style='background-color: #9ebae1 ;width: 900px;height: 400px; margin-left: 30%'>" +
                "<div style='margin-left: 16%;'><h5><span>该房间金币总输赢：<span>赢<span>"+zhuangying+"</span>输<span >"+zhuangSshu+"</span></span></span> <span>青龙:<span id='qinglongsheng'>胜<span>"+qinglongsheng+"</span>负<span id='qinglongfu'>"+qinglongfu+"</span></span>  朱雀:<span id='zhuquesheng'>胜<span>"+zhuquesheng+"</span>负<span id='zhuqueu'>"+zhuqueu+"</span></span>  玄武:<span id='xuanwusheng'>胜<span>"+xuanwusheng+"</span>负<span id='xuanwufu'>"+xuanwufu+"</span></span> 白虎:<span id='baihusheng'>胜<span>"+baihusheng+"</span>负<span id='baihufu'>"+baihufu+"</span></span>  </span></h5></div>" +
                "<div  style='margin-left: 10%'>牌型：" +
                "<h5>豹子：<span id='baiz'>"+baizi1+"</span></h5>" +
                "<h5>顺金：<span id='shunjin'>"+shunjin1+"</span></h5>" +
                "<h5>金花：<span id='jinhua'>"+jinhua1+"</span></h5>" +
                "<h5>顺子：<span id='shunzi'>"+shunzi1+"</span></h5>" +
                "<h5>对子：<span id='duizi'>"+duizi1+"</span></h5>" +
                "<h5>散牌：<span id='sanpai'>"+sanpai1+"</span></h5>" +
                "<table>" +
                "<tr><td>青龙</td><td>朱雀</td><td>玄武</td><td>白虎</td></tr>" +
                "" +
                "</table>" +
                "</div>" +

                "</div>" +
                "" +
                "" +
                "" +
                "</div>"
            $("#mengceng").html(div)




            //socket.close()
        }




    }

}




//请求拼三张服务器数据
function bairenshuihuzhuan_001(mag) {



    var  zhuangying =0
    var  zhuangSshu  =0

    var  qinglongsheng  =0
    var  qinglongfu  =0

    var  zhuquesheng  =0
    var  zhuqueu  =0

    var  xuanwusheng  =0
    var  xuanwufu  =0

    var  baihusheng  =0
    var  baihufu  =0


    var  baizi1 =0
    var  shunjin1 =0
    var  jinhua1 =0
    var  shunzi1 =0
    var  duizi1 =0
    var  sanpai1 =0




    socket = new WebSocket("ws://"+IPconf+":"+prot+"/ws/join");
    socket.onopen = function() {
        socket.send("1000"+GetCookies("UG"));
        socket.send("9073" + JSON.stringify({
            UG:GetCookies("UG"),
            RM:mag
        }));
        socket.onmessage = function (msg) {
            //alert(msg.data)
            var newdate="";
            for(var i=0;i<msg.data.length;i++){
                if (i>3){
                    newdate = newdate + msg.data[i];
                }
            }
            obj = toJson(newdate)
            //  alert(obj.Rec)


//            alert(duizi1+"========="+sanpai1) "<div style='margin-left: 16%;'><h5><span>该房间金币总输赢：<span>赢<span>"+zhuangying+"</span>输<span >"+zhuangSshu+"</span></span></span> <span>青龙:<span id='qinglongsheng'>胜<span>"+qinglongsheng+"</span>负<span id='qinglongfu'>"+qinglongfu+"</span></span>  朱雀:<span id='zhuquesheng'>胜<span>"+zhuquesheng+"</span>负<span id='zhuqueu'>"+zhuqueu+"</span></span>  玄武:<span id='xuanwusheng'>胜<span>"+xuanwusheng+"</span>负<span id='xuanwufu'>"+xuanwufu+"</span></span> 白虎:<span id='baihusheng'>胜<span>"+baihusheng+"</span>负<span id='baihufu'>"+baihufu+"</span></span>  </span></h5></div>" +
//             var div = "<div style='width: 100%;height: 100%;background-color: #1e2a4c; background-color:rgba(0,0,0,0.3) ;position: absolute' id='div_123456'> " +
//                 "<div style='background-color: #00acec;width: 30px;height: 20px;margin-left: 75.7%;margin-top: 10%' onclick='Noet_div()'>关闭</div>" +
//                 "<div style='background-color: #9ebae1 ;width: 900px;height: 400px; margin-left: 30%'>" +
//
//                 "<div  style='margin-left: 10%;float: left'>游戏记录：" +
//                 "<h5>斧子数量记录：<span id='baiz'>"+obj.Rec.AXE+"</span></h5>" +
//                 "<h5>枪数量记录：<span id='shunjin'>"+obj.Rec.SPEAR+"</span></h5>" +
//                 "<h5>刀数量记录：<span id='jinhua'>"+obj.Rec.KNIFE+"</span></h5>" +
//                 "<h5>鲁智深数量记录：<span id='shunzi'>"+obj.Rec.LOO+"</span></h5>" +
//                 "<h5>林冲数量记录：<span id='duizi'>"+obj.Rec.LIN+"</span></h5>" +
//                 "<h5>宋江数量记录：<span id='sanpai'>"+obj.Rec.SONG+"</span></h5>" +
//                 "<h5>旗子数量记录：<span id='baiz'>"+obj.Rec.FLAG+"</span></h5>" +
//                 "<h5>忠义堂数量记录：<span id='shunjin'>"+obj.Rec.ZHONG+"</span></h5>" +
//                 "<h5>龙数量记录：<span id='jinhua'>"+obj.Rec.DRAGON+"</span></h5>" +
//                 "<h5>兵器数量记录：<span id='shunzi'>"+obj.Rec.WEAPON+"</span></h5>" +
//                 "<h5>人物数量记录：<span id='duizi'>"+obj.Rec.PERSON+"</span></h5>" +
//                 "<h5>总游戏次数：<span id='sanpai'>"+obj.Rec.GAMECOUNT+"</span></h5>" +
//                 "</div>" +
//                 "<div  style='margin-left: 10px;float: left'>游戏记录：" +
//                 "<h5>获胜次数：<span id='baiz'>"+obj.Rec.GAMEWIN+"</span></h5>" +
//                 "<h5>获胜比：<span id='shunjin'>"+obj.Rec.GAMEWINRATE+"</span></h5>" +
//                 "<h5>总压分：<span id='jinhua'>"+obj.Rec.GAMEBET+"</span></h5>" +
//                 "<h5>总赢分：<span id='shunzi'>"+obj.Rec.GAMEWINSCORE+"</span></h5>" +
//                 "<h5>返分比例：<span id='duizi'>"+obj.Rec.GAMERETSCORE+"</span></h5>" +
//                 "<h5>小游戏次数：<span id='sanpai'>"+obj.Rec.SMALLGAME+"</span></h5>" +
//                 "<h5>小游戏转动次数：<span id='baiz'>"+obj.Rec.SMALLROUND+"</span></h5>" +
//                 "<h5>小游戏总得分：<span id='shunjin'>"+obj.Rec.SMALLSCORE+"</span></h5>" +
//                 "<h5>小游戏4枚次数：<span id='jinhua'>"+obj.Rec.SMALL4COUNT+"</span></h5>" +
//                 "<h5>小游戏3枚次数：<span id='shunzi'>"+obj.Rec.SMALL3COUNT+"</span></h5>" +
//                 "<h5>小游戏忠义堂次数：<span id='duizi'>"+obj.Rec.SMALLZHONG+"</span></h5>" +
//                 "<h5>小游戏旗次数：<span id='sanpai'>"+obj.Rec.SMALLFLAG+"</span></h5>" +
//                 "</div>" +
//                 "<div  style='margin-left: 10px;float: left'>游戏记录：" +
//                 "<h5>小游戏宋江次数：<span id='baiz'>"+obj.Rec.SMALLSONG+"</span></h5>" +
//                 "<h5>小游戏林冲次数：<span id='shunjin'>"+obj.Rec.SMALLLIN+"</span></h5>" +
//                 "<h5>小游戏鲁智深次数：<span id='jinhua'>"+obj.Rec.SMALLLOO+"</span></h5>" +
//                 "<h5>小游戏刀次数：<span id='shunzi'>"+obj.Rec.SMALLKNIFE+"</span></h5>" +
//                 "<h5>小游戏枪次数：<span id='duizi'>"+obj.Rec.SMALLSPEAR+"</span></h5>" +
//                 "<h5>小游戏斧头次数：<span id='sanpai'>"+obj.Rec.SMALLAXE+"</span></h5>" +
//
//                 "<h5>进入小游戏的次数：<span id='baiz'>"+obj.Sr.SMALLGAME[0]+"</span></h5>" +
//                 "<h5>小游戏四枚次数：<span id='shunjin'>"+obj.Sr.SMALLGAME[1]+"</span></h5>" +
//                 "<h5>小游戏三枚次数：<span id='jinhua'>"+obj.Sr.SMALLGAME[2]+"</span></h5>" +
//                 "<h5>小游戏忠义堂次数：<span id='shunzi'>"+obj.Sr.SMALLGAME[3]+"</span></h5>" +
//                 "<h5>小游戏旗次数：<span id='duizi'>"+obj.Sr.SMALLGAME[4]+"</span></h5>" +
//                 "<h5>小游戏宋江次数：<span id='sanpai'>"+obj.Sr.SMALLGAME[5]+"</span></h5>" +
//                 "</div>" +
//                 "<div  style='margin-left: 10px'>游戏记录：" +
//                 "<h5>小游戏林冲次数：<span id='baiz'>"+obj.Rec.SMALLSONG+"</span></h5>" +
//                 "<h5>小游戏鲁智深次数：<span id='shunjin'>"+obj.Rec.SMALLLIN+"</span></h5>" +
//                 "<h5>小游戏刀次数：<span id='jinhua'>"+obj.Rec.SMALLLOO+"</span></h5>" +
//                 "<h5>小游戏枪次数：<span id='shunzi'>"+obj.Rec.SMALLKNIFE+"</span></h5>" +
//                 "<h5>小游戏斧头次数：<span id='duizi'>"+obj.Rec.SMALLSPEAR+"</span></h5>" +
//                 "<h5>小游戏斧头次数：<span id='sanpai'>"+obj.Rec.SMALLAXE+"</span></h5>" +
//
//                 "<h5>进入小游戏的次数：<span id='baiz'>"+obj.Sr.SMALLGAME[0]+"</span></h5>" +
//                 "<h5>小游戏四枚次数：<span id='shunjin'>"+obj.Sr.SMALLGAME[1]+"</span></h5>" +
//                 "<h5>小游戏三枚次数：<span id='jinhua'>"+obj.Sr.SMALLGAME[2]+"</span></h5>" +
//                 "<h5>小游戏忠义堂次数：<span id='shunzi'>"+obj.Sr.SMALLGAME[3]+"</span></h5>" +
//                 "<h5>小游戏旗次数：<span id='duizi'>"+obj.Sr.SMALLGAME[4]+"</span></h5>" +
//                 "<h5>小游戏宋江次数：<span id='sanpai'>"+obj.Sr.SMALLGAME[5]+"</span></h5>" +
//                 "</div>" +
//                 "</div>" +
//                 "" +
//                 "" +
//                 "" +
//                 "</div>"
            var div = "<div style='width: 100%;height: 100%;background-color: #1e2a4c; background-color:rgba(0,0,0,0.3) ;position: absolute' id='div_123456'> " +
                "<div style='background-color: #00acec;width: 30px;height: 20px;margin-left: 75.7%;margin-top: 10%' onclick='Noet_div()'>关闭</div>" +
                "<div style='background-color: #9ebae1 ;width: 900px;height: 420px; margin-left: 30%'>" +

                "<div  style='margin-left: 10%;float: left'>" +
                "<table style='width: 700px;border:1px solid #1e2a4c'>" +
                "<tr><td style='width: 135px'>游戏记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏</td><td>次数</td><td>房间总比</td><td>次数</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/futou.png' width='40' height='40'>斧子数量记录</td><td>"+obj.Rec.AXE[0]+"</td><td>"+obj.Rec.AXE[1]+"</td><td>"+obj.Rec.AXE[2]+"</td><td>"+obj.Rec.AXE[3]+"</td><td>小游戏次数</td><td>"+obj.Rec.SMALLGAME[0]+"</td><td>总游戏次数</td><td>"+obj.Rec.GAMECOUNT[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/qiang.png' width='40' height='40'>枪数量记录</td><td>"+obj.Rec.SPEAR[0]+"</td><td>"+obj.Rec.SPEAR[1]+"</td><td>"+obj.Rec.SPEAR[2]+"</td><td>"+obj.Rec.SPEAR[3]+"</td><td>小游戏转动次数</td><td>"+obj.Rec.SMALLROUND[0]+"</td><td>获胜次数</td><td>"+obj.Rec.GAMEWIN[0]+"</td></tr>" +

                "<tr><td><img src='/static/imageshuihu/dao.png' width='40' height='40'>刀数量记录</td><td>"+obj.Rec.KNIFE[0]+"</td><td>"+obj.Rec.KNIFE[1]+"</td><td>"+obj.Rec.KNIFE[2]+"</td><td>"+obj.Rec.KNIFE[3]+"</td><td>小游戏总得分</td><td>"+obj.Rec.SMALLSCORE[0]+"</td><td>获胜比</td><td>"+obj.Rec.GAMEWINRATE[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/luzhishen.png' width='40' height='40'>鲁智深数量记录</td><td>"+obj.Rec.LOO[0]+"</td><td>"+obj.Rec.LOO[1]+"</td><td>"+obj.Rec.LOO[2]+"</td><td>"+obj.Rec.LOO[3]+"</td><td>小游戏4枚次数</td><td>"+obj.Rec.SMALL4COUNT[0]+"</td><td>总压分</td><td>"+obj.Rec.GAMEBET[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/linchong.png' width='40' height='40'>林冲数量记录</td><td>"+obj.Rec.LIN[0]+"</td><td>"+obj.Rec.LIN[1]+"</td><td>"+obj.Rec.LIN[2]+"</td><td>"+obj.Rec.LIN[3]+"</td><td>小游戏3枚次数</td><td>"+obj.Rec.SMALL3COUNT[0]+"</td><td>返分比例</td><td>"+obj.Rec.GAMERETSCORE[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/songjiang.png' width='40' height='40'>宋江数量记录</td><td>"+obj.Rec.SONG[0]+"</td><td>"+obj.Rec.SONG[1]+"</td><td>"+obj.Rec.SONG[2]+"</td><td>"+obj.Rec.SONG[3]+"</td><td>小游戏忠义堂次数</td><td>"+obj.Rec.SMALLZHONG[0]+"</td><td>总赢分</td><td>"+obj.Rec.GAMEWINSCORE[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/titianxingdao.png' width='40' height='40'>旗子数量记录</td><td>"+obj.Rec.FLAG[0]+"</td><td>"+obj.Rec.FLAG[1]+"</td><td>"+obj.Rec.FLAG[2]+"</td><td>"+obj.Rec.FLAG[3]+"</td><td>小游戏旗次数</td><td>"+obj.Rec.SMALLFLAG[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/zhongyi.png' width='40' height='40'>忠义堂数量记录</td><td>"+obj.Rec.ZHONG[0]+"</td><td>"+obj.Rec.ZHONG[1]+"</td><td>"+obj.Rec.ZHONG[2]+"</td><td>"+obj.Rec.ZHONG[3]+"</td><td>小游戏宋江次数</td><td>"+obj.Rec.SMALLSONG[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/shuihu.png' width='40' height='40'>龙数量记录</td><td>"+obj.Rec.DRAGON[0]+"</td><td>"+obj.Rec.DRAGON[1]+"</td><td>"+obj.Rec.DRAGON[2]+"</td><td>"+obj.Rec.DRAGON[3]+"</td><td>小游戏林冲次数</td><td>"+obj.Rec.SMALLLIN[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/bingqi.png' width='40' height='40'>兵器数量记录</td><td colspan='4'>"+obj.Rec.WEAPON[0]+"</td><td>小游戏鲁智深次数</td><td>"+obj.Rec.SMALLLOO[0]+"</td></tr>" +
                "<tr><td><img src='/static/imageshuihu/renwu.png' width='40' height='40'>人物数量记录</td><td colspan='4'>"+obj.Rec.PERSON[0]+"</td><td>小游戏刀次数</td><td>"+obj.Rec.SMALLKNIFE[0]+"</td></tr>" +

                // "<tr><td><img src='/static/imageshuihu/dao.png' width='40' height='40'>刀数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏总得分</td><td>5</td><td>获胜比</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/luzhishen.png' width='40' height='40'>鲁智深数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏4枚次数</td><td>5</td><td>总压分</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/linchong.png' width='40' height='40'>林冲数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏3枚次数</td><td>5</td><td>返分比例</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/songjiang.png' width='40' height='40'>宋江数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏忠义堂次数</td><td>5</td><td>房间统计</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/titianxingdao.png' width='40' height='40'>旗子数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏旗次数</td><td>5</td><td>房间统计</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/zhongyi.png' width='40' height='40'>忠义堂数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏宋江次数</td><td>5</td><td>房间统计</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/shuihu.png' width='40' height='40'>龙数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏林冲次数</td><td>5</td><td>房间统计</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/bingqi.png' width='40' height='40'>兵器数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏鲁智深次数</td><td>5</td><td>房间统计</td><td>5</td></tr>" +
                // "<tr><td><img src='/static/imageshuihu/renwu.png' width='40' height='40'>人物数量记录</td><td>3</td><td>4</td><td>5</td><td>All</td><td>小游戏刀次数</td><td>5</td><td>房间统计</td><td>5</td></tr>" +
                // "" +
                "</table>" +
                "</div>" +
                "</div>" +
                "" +
                "" +
                "" +
                "</div>"


            $("#mengceng").html(div)




            //socket.close()
        }




    }

}











function bairenDEzhou() {
    // alert(123)



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"德州各机台实时数据";
    $("#Gvip").html(date_copy)

    var div  = ""



    var  jin  = 0
    var  cha  = 0
    var  chu  = 0


    for (var i= 1 ;i<= 30 ;i++){


        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count >0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人德州"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人德州"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    // div += "<div style='margin-left: -1%;margin-top: 1%'><button onclick='bairendezhou(1)' style='width: 7px;margin-left: -97.3%;margin-top: -174px;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #fac270'>初级场</button><button onclick='bairendezhou(2)'  style='width: 7px;margin-left: -1.2%;margin-top:0%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #00eeFF'>中级场</button><button onclick='bairendezhou(3)'  style='width: 9px;margin-left: -1.2%;margin-top: 12%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #2f4378'>高级场</button></div>"

    div += "<div class='border_buttion'><button onclick='bairendezhou(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='bairendezhou(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='bairendezhou(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)

}

// margin-left: -1%;margin-top: 1%
function bairendezhou(num) {

    if (num == 1 ){


        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"德州各机台实时数据";
        $("#Gvip").html(date_copy)

        var div  = ""



        var  jin  = 0
        var  cha  = 0
        var  chu  = 0


        for (var i= 1 ;i<= 30 ;i++){


            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count


            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人德州"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人德州"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='bairendezhou(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='bairendezhou(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='bairendezhou(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)



    }else if (num == 2 ) {


        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"德州各机台实时数据";
        $("#Gvip").html(date_copy)

        var div  = ""



        var  jin  = 0
        var  cha  = 0
        var  chu  = 0


        for (var i= 1 ;i<= 30 ;i++){


            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人德州"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人德州"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='bairendezhou(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='bairendezhou(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='bairendezhou(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)



    }else if (num == 3 ) {


        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"德州各机台实时数据";
        $("#Gvip").html(date_copy)

        var div  = ""



        var  jin  = 0
        var  cha  = 0
        var  chu  = 0


        for (var i= 1 ;i<= 30 ;i++){


            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count


            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人德州"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人德州"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='bairendezhou(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='bairendezhou(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='bairendezhou(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)



    }











}








function bairenhenhongmeifang_001() {
    // alert(123)



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0



    for (var i= 1 ;i<= 30 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count >0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenheihongmeifang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#8cafed  '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenheihongmeifang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#fac270  '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }

    }

    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    // div += "<div style='margin-left: -1%;margin-top: 1%'><button onclick='heihongmeifang(1)' style='width: 7px;margin-left: -97.3%;margin-top: -174px;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #fac270'>初级场</button><button onclick='heihongmeifang(2)'  style='width: 7px;margin-left: -1.2%;margin-top:0%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #00eeFF'>中级场</button><button onclick='heihongmeifang(3)'  style='width: 9px;margin-left: -1.2%;margin-top: 12%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #2f4378'>高级场</button></div>"

    div += "<div class='border_buttion'><button onclick='heihongmeifang(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='heihongmeifang(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='heihongmeifang(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)
}


function heihongmeifang(num) {


    if (num == 1 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#fac270  '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#fac270  '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='heihongmeifang(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='heihongmeifang(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='heihongmeifang(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)


    }else if (num ==2 ){
        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77  '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77  '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='heihongmeifang(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='heihongmeifang(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='heihongmeifang(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)
    }else if (num == 3 ) {

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed  '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed  '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>百人黑红梅方"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='heihongmeifang(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='heihongmeifang(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='heihongmeifang(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)


    }











}





function senlinwuhui_001() {
    // alert(123)

    var div  = ""



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"森林舞会各机台实时数据";
    $("#Gvip").html(date_copy)


    var  jin  = 0
    var  cha  = 0
    var  chu  = 0
    for (var i= 1 ;i<= 1500 ;i++){
        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count <0 ){
            var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>森林舞会"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }else {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>森林舞会"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }

    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    //div += "<div style='margin-left: -1%;margin-top: 1%'><button onclick='senlinwuhui001(1)' style='width: 7px;margin-left: -97.3%;margin-top: -174px;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #fac270'>初级场</button><button onclick='senlinwuhui001(2)'  style='width: 7px;margin-left: -1.2%;margin-top:0%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #00eeFF'>中级场</button><button onclick='senlinwuhui001(3)'  style='width: 9px;margin-left: -1.2%;margin-top: 12%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #f6a828'>高级场</button></div>"

    div += "<div class='border_buttion'><button onclick='senlinwuhui001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='senlinwuhui001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='senlinwuhui001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)
}



function senlinwuhui001(num) {



        if (num == 1){

            var div  = ""



            var myDate = new Date();

            myDate.getFullYear();
            myDate.getMonth();
            myDate.getDate();

            var my =  myDate.getMonth()+1
            var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"森林舞会各机台实时数据";
            $("#Gvip").html(date_copy)


            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            for (var i= 1 ;i<= 500 ;i++){
                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if  (num_count <0 ){
                    var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color:#fac270 '>" +
                        "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                        "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content'>森林舞会"+i+"</div>" +
                        "                    </a>" +
                        "                </div>"

                    div = div+divs
                }else {
                    var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color:#fac270 '>" +
                        "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                        "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content'>森林舞会"+i+"</div>" +
                        "                    </a>" +
                        "                </div>"

                    div = div+divs
                }
            }
            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            div += "<div class='border_buttion'><button onclick='senlinwuhui001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='senlinwuhui001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='senlinwuhui001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
            $("#GPU_diV_01").html(div)


        }else if (num == 2){

            var div  = ""



            var myDate = new Date();

            myDate.getFullYear();
            myDate.getMonth();
            myDate.getDate();

            var my =  myDate.getMonth()+1
            var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"森林舞会各机台实时数据";
            $("#Gvip").html(date_copy)


            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            for (var i= 501 ;i<= 1000 ;i++){
                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if  (num_count <0 ){
                    var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color:#148f77 '>" +
                        "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                        "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content'>森林舞会"+i+"</div>" +
                        "                    </a>" +
                        "                </div>"

                    div = div+divs
                }else {
                    var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color:#148f77 '>" +
                        "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                        "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content'>森林舞会"+i+"</div>" +
                        "                    </a>" +
                        "                </div>"

                    div = div+divs
                }
            }
            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            div += "<div class='border_buttion'><button onclick='senlinwuhui001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='senlinwuhui001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='senlinwuhui001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
            $("#GPU_diV_01").html(div)


        }else {


            var div  = ""



            var myDate = new Date();

            myDate.getFullYear();
            myDate.getMonth();
            myDate.getDate();

            var my =  myDate.getMonth()+1
            var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"森林舞会各机台实时数据";
            $("#Gvip").html(date_copy)


            var  jin  = 0
            var  cha  = 0
            var  chu  = 0
            for (var i= 1001 ;i<= 1500 ;i++){
                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count

                if  (num_count <0 ){
                    var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color:#8cafed '>" +
                        "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                        "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content'>森林舞会"+i+"</div>" +
                        "                    </a>" +
                        "                </div>"

                    div = div+divs
                }else {
                    var divs = "<div class='span2 box-quick-link blue-background' onclick='Select_senlinwuhui_inform ("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                        "                    <a href='#'>" +
                        "                        <div class='header' style='background-color:#8cafed '>" +
                        "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                        "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                        "                        </div>" +
                        "                        <div class='content'>森林舞会"+i+"</div>" +
                        "                    </a>" +
                        "                </div>"

                    div = div+divs
                }
            }
            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            div += "<div class='border_buttion'><button onclick='senlinwuhui001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='senlinwuhui001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='senlinwuhui001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
            $("#GPU_diV_01").html(div)



        }



}







//森林舞会请求房间数据





















function shuihuzhuan_001() {
    // alert(123)



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 1500 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (num_count < 0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>水浒传"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>水浒传"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    div += "<div class='border_buttion'><button onclick='shuihuzhuan0022(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
    
    $("#GPU_diV_01").html(div)
}


function shuihuzhuan0022(num) {

    if  (num == 1 ){


        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 1500 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count < 0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>水浒传"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>水浒传"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='shuihuzhuan0022(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#GPU_diV_01").html(div)

    }else  if (num == 2 ){



        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 1500 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count < 0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>水浒传"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>水浒传"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='shuihuzhuan0022(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#GPU_diV_01").html(div)

    }else  if (num == 3 ){



        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 1500 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count < 0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>水浒传"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>水浒传"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='shuihuzhuan0022(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#GPU_diV_01").html(div)

    }


}






function shuhuzhuan_zhoangyueji() {

    var   count =  mGetDate(date.getFullYear(),date.getMonth()+1)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= count ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'>" +
            "                    <a href='#'>" +
            "                        <div class='header'>" +
            "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
            "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
            "                        </div>" +
            "                        <div class='content'>水浒传"+i+"</div>" +
            "                    </a>" +
            "                </div>"

        div = div+divs
    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    $("#GPU_diV_01").html(div)


}




function wangbao_001() {
    // alert(123)



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 30 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if(num_count <0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#fac270 '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>旺宝"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#fac270 '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>旺宝"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    div += "<div class='border_buttion'><button onclick='wangbao000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='wangbao000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='wangbao000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


    $("#GPU_diV_01").html(div)
}


function wangbao000122(num) {


    if  (num ==1 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if(num_count <0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>旺宝"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>旺宝"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='wangbao000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='wangbao000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='wangbao000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


        $("#GPU_diV_01").html(div)

    }else if (num == 2 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if(num_count <0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77 '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>旺宝"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77 '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>旺宝"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='wangbao000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='wangbao000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='wangbao000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


        $("#GPU_diV_01").html(div)

    }else if (num == 3 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if(num_count <0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>旺宝"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>旺宝"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='wangbao000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='wangbao000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='wangbao000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


        $("#GPU_diV_01").html(div)

    }




}




function haochejingji_001() {
    // alert(123)


    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"豪车竞技实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 1500 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if (num_count <0){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>豪车竞技"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }else {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>豪车竞技"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }

    }

    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    div += "<div class='border_buttion'><button onclick='wangbao000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='wangbao000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='wangbao000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
    $("#GPU_diV_01").html(div)
}





function bairenniuniu_001() {
    // alert(123)



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"百人牛牛各机台实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0



    for (var i= 1 ;i<= 30 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count >0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='nuinui_gAME_0001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#8cafed  '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人牛牛"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='nuinui_gAME_0001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#fac270  '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人牛牛"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }

    }

    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    // div += "<div style='margin-left: -1%;margin-top: 1%'><button onclick='heihongmeifang(1)' style='width: 7px;margin-left: -97.3%;margin-top: -174px;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #fac270'>初级场</button><button onclick='heihongmeifang(2)'  style='width: 7px;margin-left: -1.2%;margin-top:0%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #00eeFF'>中级场</button><button onclick='heihongmeifang(3)'  style='width: 9px;margin-left: -1.2%;margin-top: 12%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #2f4378'>高级场</button></div>"

    div += "<div class='border_buttion'><button onclick='niuniu_fuwuqixinxi_inform(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='niuniu_fuwuqixinxi_inform(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='niuniu_fuwuqixinxi_inform(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)
}


//百人牛牛 初中高
function niuniu_fuwuqixinxi_inform(){



    alert(123)

    
    
    



}




//百人牛牛服务器 数据
function nuinui_gAME_0001(num) {


    var  zhuangying =0
    var  zhuangSshu  =0

    var  qinglongsheng  =0
    var  qinglongfu  =0

    var  zhuquesheng  =0
    var  zhuqueu  =0

    var  xuanwusheng  =0
    var  xuanwufu  =0

    var  baihusheng  =0
    var  baihufu  =0


    var  baizi1 =0
    var  shunjin1 =0
    var  jinhua1 =0
    var  shunzi1 =0
    var  duizi1 =0
    var  sanpai1 =0




    socket = new WebSocket("ws://"+IPconf+":"+prot+"/ws/join");
    socket.onopen = function() {
        socket.send("1000"+GetCookies("UG"));
        socket.send("9087" + JSON.stringify({
            UG:GetCookies("UG"),
            RM:mag
        }));
        socket.onmessage = function (msg) {
            var newdate="";
            for(var i=0;i<msg.data.length;i++){
                if (i>3){
                    newdate = newdate + msg.data[i];
                }
            }
            obj = toJson(newdate)
            // alert(obj.RM)
            for(var i = 0 ; i<obj.RM.length;i++ ){
                zhuangying += obj.RM[i].Win
                zhuangSshu += obj.RM[i].Los

                if (obj.RM[i].Tp[0] == 1 ) {
                    qinglongsheng ++
                }else{
                    qinglongfu++
                }

                if (obj.RM[i].Tp[1] == 1 ) {
                    zhuquesheng++
                }else{
                    zhuqueu++
                }

                if (obj.RM[i].Tp[2] == 1 ) {
                    xuanwusheng++
                }else{
                    xuanwufu++
                }
                if (obj.RM[i].Tp[3] == 1 ) {
                    baihusheng++
                }else{
                    baihufu++
                }

                for(var j = 0;j < 5;j++){

                    if (obj.RM[i].Px[j] == 1 ) {

                        baizi1++
                    }
                    if (obj.RM[i].Px[j] == 2 ) {
                        shunjin1++
                    }
                    if (obj.RM[i].Px[j] == 3 ) {
                        jinhua1++
                    }
                    if (obj.RM[i].Px[j] == 4 ) {
                        shunzi1++
                    }
                    if (obj.RM[i].Px[j] == 5 ) {
                        duizi1++
                    }
                    //alert(obj.RM[i].Px[j])
                    if (obj.RM[i].Px[j] == 6  || obj.RM[i].Px[j] == 7 ) {
                        sanpai1++
                    }
                }
            }

//            alert(duizi1+"========="+sanpai1)
            var div = "<div style='width: 100%;height: 100%;background-color: #1e2a4c; background-color:rgba(0,0,0,0.3) ;position: absolute' id='div_123456'> " +
                "<div style='background-color: #00acec;width: 30px;height: 20px;margin-left: 75.7%;margin-top: 10%' onclick='Noet_div()'>关闭</div>" +
                "<div style='background-color: #9ebae1 ;width: 900px;height: 400px; margin-left: 30%'>" +
                "<div style='margin-left: 16%;'><h5><span>该房间金币总输赢：<span>赢<span>"+zhuangying+"</span>输<span >"+zhuangSshu+"</span></span></span> <span>青龙:<span id='qinglongsheng'>胜<span>"+qinglongsheng+"</span>负<span id='qinglongfu'>"+qinglongfu+"</span></span>  朱雀:<span id='zhuquesheng'>胜<span>"+zhuquesheng+"</span>负<span id='zhuqueu'>"+zhuqueu+"</span></span>  玄武:<span id='xuanwusheng'>胜<span>"+xuanwusheng+"</span>负<span id='xuanwufu'>"+xuanwufu+"</span></span> 白虎:<span id='baihusheng'>胜<span>"+baihusheng+"</span>负<span id='baihufu'>"+baihufu+"</span></span>  </span></h5></div>" +
                "<div  style='margin-left: 10%'>牌型：" +
                "<h5>豹子：<span id='baiz'>"+baizi1+"</span></h5>" +
                "<h5>顺金：<span id='shunjin'>"+shunjin1+"</span></h5>" +
                "<h5>金花：<span id='jinhua'>"+jinhua1+"</span></h5>" +
                "<h5>顺子：<span id='shunzi'>"+shunzi1+"</span></h5>" +
                "<h5>对子：<span id='duizi'>"+duizi1+"</span></h5>" +
                "<h5>散牌：<span id='sanpai'>"+sanpai1+"</span></h5>" +
                "<table>" +
                "<tr><td>青龙</td><td>朱雀</td><td>玄武</td><td>白虎</td></tr>" +
                "" +
                "</table>" +
                "</div>" +

                "</div>" +
                "" +
                "" +
                "" +
                "</div>"
            $("#mengceng").html(div)




            //socket.close()oshi
        }




    }






}


























function paiji_001_copy() {



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
    $("#Gvip").html(date_copy)



    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 30 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count <0) {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>牌机机台</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs
        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>牌机机台</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs
        }

    }

    div += "<div class='border_buttion'><button onclick='paiji_ooo1_1110101(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='paiji_ooo1_1110101(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='paiji_ooo1_1110101(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    $("#GPU_diV_01").html(div)


}






function paiji_ooo1_1110101(num) {



    if (num == 1 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#fac270  '>" +
                    "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                    " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>牌机机台"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#fac270  '>" +
                    "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                    " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>牌机机台"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='paiji_ooo1_1110101(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='paiji_ooo1_1110101(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='paiji_ooo1_1110101(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)


    }else if (num ==2 ){
        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        for (var i= 1 ;i<= 300 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77  '>" +
                    "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                    " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>牌机机台"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77  '>" +
                    "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                    " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>牌机机台"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='paiji_ooo1_1110101(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='paiji_ooo1_1110101(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='paiji_ooo1_1110101(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)
    }else if (num == 3 ) {

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0



        for (var i= 1 ;i<= 300 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count >0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed  '>" +
                    "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                    " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>牌机机台"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed  '>" +
                    "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                    " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>牌机机台"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }
        }

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        div += "<div class='border_buttion'><button onclick='paiji_ooo1_1110101(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='paiji_ooo1_1110101(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='paiji_ooo1_1110101(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
        $("#GPU_diV_01").html(div)


    }








}













function paiji_001_zhou_yue_ji(num) {
    // alert(123) 玫瑰
    $("#GPU_diV_01").css("height","670px")
    document.getElementById("titou").style.display = "none"
    document.getElementById("page14_jChart1").style.display = "none"
    document.getElementById("h5gaikuang").style.display = "block"
    var  static  = GetCookies("sataic")

    if (num == 1 ){
        if (static >= 1000) {
            paiji_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='paiji_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                // if (i == 1){
                //     timestatic = time2
                // }else if (i == 2){
                //     timestatic = time3asd
                // }else if (i == 3){
                //     timestatic = time4
                // }else if (i == 4){
                //     timestatic = time5
                // }else if (i == 5){
                //     timestatic = time6
                // }else if (i == 6){
                //     timestatic = time7
                // }else if (i == 7){
                //     timestatic = time8
                // }


                if (i == 1){
                    timestatic = time8
                }else if (i == 2){
                    timestatic = time7
                }else if (i == 3){
                    timestatic = time6
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time4
                }else if (i == 6){
                    timestatic = time3
                }else if (i == 7){
                    timestatic = time2
                }


                var divs = "<div class='span2 box-quick-link blue-background' onclick='paiji_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }
    }else if (num == 2 ){//水浒传


        if (static >= 1000) {
            shuihuzhuan_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='shuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='shuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 2 ){//水浒传


        if (static >= 1000) {
            shuihuzhuan_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='shuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='shuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 3 ){//拼三张


        if (static >= 1000) {
            bairenpinsanzhang()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 4 ){//旺宝


        if (static >= 1000) {
            wangbao_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='wangbao_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='wangbao_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 5 ){//森林舞会


        if (static >= 1000) {
            senlinwuhui_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='senlinwuhui_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='senlinwuhui_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 6 ){//豪车竞技


        if (static >= 1000) {
            haochejingji_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='haochejingji_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='haochejingji_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 7 ){//百人德州


        if (static >= 1000) {
            bairenDEzhou()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenDEzhou("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenDEzhou("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 8 ){//百人牛牛


        if (static >= 1000) {
            bairenniuniu_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenniuniu_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenniuniu_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 9 ){//黑红梅方


        if (static >= 1000) {
            bairenhenhongmeifang_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenhenhongmeifang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenhenhongmeifang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }else if (num == 10 ){//水果机


        if (static >= 1000) {
            shuiguiji_001()
        }else  if (static >= 10){
            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0

            var date = new Date();
            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)


            var  tim  =  1+date.getMonth()


            for (var i= 1 ;i <= static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count


                var   time = date.getFullYear() +"-"+ tim  +"-"+i

                var divs = "<div class='span2 box-quick-link blue-background' onclick='shuiguiji_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+time+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)





        }else {

            var div  = ""

            var  jin  = 0
            var  cha  = 0
            var  chu  = 0


            var times = getDay(0)

            var  time =  getDay(-6)
            times  =   times.substring(0,10)
            time  =   time.substring(0,10)
            $("#time_pork_01").html(time)
            $("#time_pork_02").html(times)

            var  time2 =  getDay(-6)
            var  time3 =  getDay(-5)
            var  time4 =  getDay(-4)
            var  time5 =  getDay(-3)
            var  time6 =  getDay(-2)
            var  time7 =  getDay(-1)
            var  time8 =  getDay(0)




            for (var i= 1 ;i < static ;i++){

                var  num = GetRandomNum(100000, 10000000)
                var count_time =  GetRandomNum(100000, 10000000)
                var  num_count = num  - count_time

                jin += num
                chu += count_time
                cha += num_count
                var  timestatic = ""

                if (i == 1){
                    timestatic = time2
                }else if (i == 2){
                    timestatic = time3
                }else if (i == 3){
                    timestatic = time4
                }else if (i == 4){
                    timestatic = time5
                }else if (i == 5){
                    timestatic = time6
                }else if (i == 6){
                    timestatic = time7
                }else if (i == 7){
                    timestatic = time8
                }

                var divs = "<div class='span2 box-quick-link blue-background' onclick='shuiguiji_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>"+timestatic+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs
            }



            $("#jin").html(jin)
            $("#chu").html(chu)
            $("#cha").html(cha)
            $("#GPU_diV_01").html(div)



        }




    }





}





function shuiguiji_001() {
    // alert(123)



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  =myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"黑红梅方各机台实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0



    for (var i= 1 ;i<= 30 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (num_count >0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#8cafed  '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span style='color: #f34541' >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>家家乐"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color:#fac270  '>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>家家乐"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }

    }

    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    // div += "<div style='margin-left: -1%;margin-top: 1%'><button onclick='heihongmeifang(1)' style='width: 7px;margin-left: -97.3%;margin-top: -174px;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #fac270'>初级场</button><button onclick='heihongmeifang(2)'  style='width: 7px;margin-left: -1.2%;margin-top:0%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #00eeFF'>中级场</button><button onclick='heihongmeifang(3)'  style='width: 9px;margin-left: -1.2%;margin-top: 12%;text-align: center;  vertical-align:middle;font-size: 9px;background-color: #2f4378'>高级场</button></div>"

    div += "<div class='border_buttion'><button onclick='jiajiale_chuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jiajiale_chuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jiajiale_chuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)
}



//家家乐  初中高


function jiajiale_chuzhonggao (num) {

    if (num == 2 ){

        // Gvip  /当前时间
        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
        $("#Gvip").html(date_copy)



        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count <0) {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>家家乐"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>家家乐"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }




        }
        div += "<div class='border_buttion'><button onclick='jiajiale_chuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jiajiale_chuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jiajiale_chuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        $("#GPU_diV_01").html(div)
    }else if (num == 3 ) {

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
        $("#Gvip").html(date_copy)



        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count
            if  (num_count <0) {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>家家乐"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>家家乐"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }

        }

        div += "<div class='border_buttion'><button onclick='jiajiale_chuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jiajiale_chuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jiajiale_chuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        $("#GPU_diV_01").html(div)


    }else {

        // Gvip  /当前时间
        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"拼三张各机台实时数据";
        $("#Gvip").html(date_copy)



        var div  = ""

        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count <0) {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: red'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>家家乐"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenjiajiale_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>家家乐"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"
                div = div+divs
            }

        }

        div += "<div class='border_buttion'><button onclick='jiajiale_chuzhonggao(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jiajiale_chuzhonggao(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jiajiale_chuzhonggao(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)
        $("#GPU_diV_01").html(div)



    }





}




//请求家家乐 服务器数据



//请求拼三张服务器数据
function bairenjiajiale_001(mag) {
    // alert(123)

    var  zhuangying =0
    var  zhuangSshu  =0

    var  qinglongsheng  =0
    var  qinglongfu  =0

    var  zhuquesheng  =0
    var  zhuqueu  =0

    var  xuanwusheng  =0
    var  xuanwufu  =0

    var  baihusheng  =0
    var  baihufu  =0


    var  baizi1 =0
    var  shunjin1 =0
    var  jinhua1 =0
    var  shunzi1 =0
    var  duizi1 =0
    var  sanpai1 =0




    socket = new WebSocket("ws://"+IPconf+":"+prot+"/ws/join");
    socket.onopen = function() {
        socket.send("1000"+GetCookies("UG"));
        socket.send("9071" + JSON.stringify({
            UG:GetCookies("UG"),
            RM:mag
        }));
        socket.onmessage = function (msg) {
            var newdate="";
            for(var i=0;i<msg.data.length;i++){
                if (i>3){
                    newdate = newdate + msg.data[i];
                }
            }
            obj = toJson(newdate)
            // alert(obj.RM)
            for(var i = 0 ; i<obj.RM.length;i++ ){
                zhuangying += obj.RM[i].Win
                zhuangSshu += obj.RM[i].Los

                if (obj.RM[i].Tp[0] == 1 ) {
                    qinglongsheng ++
                }else{
                    qinglongfu++
                }

                if (obj.RM[i].Tp[1] == 1 ) {
                    zhuquesheng++
                }else{
                    zhuqueu++
                }

                if (obj.RM[i].Tp[2] == 1 ) {
                    xuanwusheng++
                }else{
                    xuanwufu++
                }
                if (obj.RM[i].Tp[3] == 1 ) {
                    baihusheng++
                }else{
                    baihufu++
                }

                for(var j = 0;j < 5;j++){

                    if (obj.RM[i].Px[j] == 1 ) {

                        baizi1++
                    }
                    if (obj.RM[i].Px[j] == 2 ) {
                        shunjin1++
                    }
                    if (obj.RM[i].Px[j] == 3 ) {
                        jinhua1++
                    }
                    if (obj.RM[i].Px[j] == 4 ) {
                        shunzi1++
                    }
                    if (obj.RM[i].Px[j] == 5 ) {
                        duizi1++
                    }
                    //alert(obj.RM[i].Px[j])
                    if (obj.RM[i].Px[j] == 6  || obj.RM[i].Px[j] == 7 ) {
                        sanpai1++
                    }

                }

            }

//            alert(duizi1+"========="+sanpai1)
            var div = "<div style='width: 100%;height: 100%;background-color: #1e2a4c; background-color:rgba(0,0,0,0.3) ;position: absolute' id='div_123456'> " +
                "<div style='background-color: #00acec;width: 30px;height: 20px;margin-left: 75.7%;margin-top: 10%' onclick='Noet_div()'>关闭</div>" +
                "<div style='background-color: #9ebae1 ;width: 900px;height: 400px; margin-left: 30%'>" +
                "<div style='margin-left: 16%;'><h5><span>该房间金币总输赢：<span>赢<span>"+zhuangying+"</span>输<span >"+zhuangSshu+"</span></span></span> <span>青龙:<span id='qinglongsheng'>胜<span>"+qinglongsheng+"</span>负<span id='qinglongfu'>"+qinglongfu+"</span></span>  朱雀:<span id='zhuquesheng'>胜<span>"+zhuquesheng+"</span>负<span id='zhuqueu'>"+zhuqueu+"</span></span>  玄武:<span id='xuanwusheng'>胜<span>"+xuanwusheng+"</span>负<span id='xuanwufu'>"+xuanwufu+"</span></span> 白虎:<span id='baihusheng'>胜<span>"+baihusheng+"</span>负<span id='baihufu'>"+baihufu+"</span></span>  </span></h5></div>" +
                "<div  style='margin-left: 10%'>牌型：" +
                "<h5>豹子：<span id='baiz'>"+baizi1+"</span></h5>" +
                "<h5>顺金：<span id='shunjin'>"+shunjin1+"</span></h5>" +
                "<h5>金花：<span id='jinhua'>"+jinhua1+"</span></h5>" +
                "<h5>顺子：<span id='shunzi'>"+shunzi1+"</span></h5>" +
                "<h5>对子：<span id='duizi'>"+duizi1+"</span></h5>" +
                "<h5>散牌：<span id='sanpai'>"+sanpai1+"</span></h5>" +
                "<table>" +
                "<tr><td>青龙</td><td>朱雀</td><td>玄武</td><td>白虎</td></tr>" +
                "" +
                "</table>" +
                "</div>" +

                "</div>" +
                "" +
                "" +
                "" +
                "</div>"
            $("#mengceng").html(div)




            //socket.close()oshi
        }




    }

}












function Yujixiangxixinxi_copy() {



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 3 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (i ==  1 ){

            var divs = "<div class='span2 box-quick-link blue-background' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +

                "                        <div class='content'>经典模式</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else   if  (i == 2 ) {

            var divs = "<div class='span2 box-quick-link blue-background' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #148f77'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>房卡模式</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }else   if  (i == 3 ) {

            var divs = "<div class='span2 box-quick-link blue-background' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #8cafed'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #6fcc87'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>比赛模式</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    // div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)





}






function  Yujixiangxixinxi() {



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 1500 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (num_count < 0 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>捕鱼"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>捕鱼"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)



}





function shuihuzhuan0022001(num) {

    if  (num == 1 ){


        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 1500 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count < 0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>捕鱼"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #fac270'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>捕鱼"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#GPU_diV_01").html(div)

    }else  if (num == 2 ){



        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 1500 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count < 0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>捕鱼"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #148f77'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>捕鱼"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#GPU_diV_01").html(div)

    }else  if (num == 3 ){



        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 1500 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if  (num_count < 0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>捕鱼"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenshuihuzhuan_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color: #8cafed'>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>捕鱼"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

        $("#GPU_diV_01").html(div)

    }


}






//  var uvAnimationTileX = 24;
//  var uvAnimationTileY = 1;
//  var framesPerSecond = 10.0;
//  var loop = boolean;
//  var play=boolean = true;
//  var index=int;
//  var offsettime;
//  var Hidewhenstopplaying = boolean;
// function Start(){
//     offsettime = Time.time;
//     time
// }
//
//
// function Update () {
//     console.log(Time.time.type)
//     index = (Time.time - offsettime) * framesPerSecond;
//
//   //  index = index % (uvAnimationTileX * uvAnimationTileY);
//     // if(play){
//     //     index = index % (uvAnimationTileX * uvAnimationTileY);
//     //     var size = Vector2 (1.0 / uvAnimationTileX, 1.0 / uvAnimationTileY);
//     //     var uIndex = index % uvAnimationTileX;
//     //     var vIndex = index / uvAnimationTileX;
//     //     var offset = Vector2 (uIndex * size.x, 1.0 - size.y - vIndex * size.y);
//     //
//     //     GetComponent.<Renderer>().material.SetTextureOffset ("_MainTex", offset);
//     //     GetComponent.<Renderer>().material.SetTextureScale ("_MainTex", size);
//     // }
//     // if(!loop){
//     //     if(index >= (uvAnimationTileX * uvAnimationTileY)-1){
//     //         play = false;
//     //         if(Hidewhenstopplaying){
//     //             GetComponent.<Renderer>().active = false;
//     //         }
//     //     }
//     // }
//
// }









function huadongy3() {
    document.getElementById("page14_jChart1").style.display = "none"
    $("#GPU_diV_01").css("height","70%")
    //window.location.href = "http://"+IPconf+":"+prot+"/static/html/Game_inform.html"
    // alert("华东三区")  修改数据
    document.getElementById("titou").style.display = "none"
    var div  = "" +
        "<div class='container' style='position: absolute;margin-left: 5%;margin-top: 1%'>" +
        "    <div class='row-fluid'>" +
        "        <div class='row-fluid sortable'>" +
        "            <div class='box span12' style='height: 360px'>" +
        "                <div class='box-header' data-original-title>" +
        "                    <h2><i class='halflings-icon white edit'></i><span class='break'></span>档位风控</h2>" +
        "                    <div class='box-icon'>" +
        "                        <a href='#' class='btn-setting'><i class='halflings-icon white wrench'></i></a>" +
        "                        <a href='#' class='btn-minimize'><i class='halflings-icon white chevron-up'></i></a>" +
        "                        <a href='#' class='btn-close'><i class='halflings-icon white remove'></i></a>" +
        "                    </div>" +
        "                </div>" +
        "                <div class='box-content'>" +
        "                    <form class='form-horizontal'>" +
        "                        <br>" +
        "                        <label class='control-label' for='selectError3'>服务器列表</label>" +
        "                        <div class='controls'>" +
        "                            <select id='PropName1'>" +
        "                                <option value='1'>百人百家乐</option>" +
        "                                <option value='2'>百人牛牛</option>" +
        "                                <option value='3'>百人黑红梅方</option>" +
        "                                <option value='4'>百人德州</option>" +
        "                                <option value='5'>水浒传</option>" +
        "                                <option value='6'>旺宝</option>" +
        "                                <option value='7'>多财多福</option>" +
        "                                <option value='8'>百人铃铛</option>" +
        "                                <option value='9'>豪车竞赛</option>" +
        "                                <option value='10'>森林舞会</option>" +
        "                                <option value='11'>欢乐牌机</option>" +
        "                            </select>" +
        "                        </div>" +
        "                        <br>" +
        "                        <label class='control-label' for='selectError3'>房间号</label>" +
        "                        <div class='controls'>" +
        "                            <input type='text' id='Emilnc1'>" +
        "                        </div>" +
        "                        <br>" +
        "                        <label class='control-label' for='selectError3'>游戏场次</label>" +
        "                        <div class='controls'>" +
        "                            <select id='Emilnc2'>" +
        "                                <option value='1'>初级场</option>" +
        "                                <option value='2'>中级场</option>" +
        "                                <option value='3'>高级场</option>" +
        "                            </select>" +
        "                        </div>" +
        "                        <br>" +
        "                        <label class='control-label' for='selectError3'>档位列表</label>" +
        "                        <div class='controls'>" +
        "                            <select id='PropName2'>" +
        "                                <option value='1'>档位1</option>" +
        "                                <option value='2'>档位2</option>" +
        "                                <option value='3'>档位3</option>" +
        "                                <option value='4'>档位4</option>" +
        "                                <option value='5'>档位5</option>" +
        "                                <option value='6'>档位6</option>" +
        "                                <option value='7'>档位7</option>" +
        "                                <option value='8'>档位8</option>" +
        "                                <option value='9'>档位9</option>" +
        "                                <option value='10'>档位10</option>" +
        "                            </select>" +
        "                        </div>" +
        "                        <br>" +
        "                        <br>" +
        "                        <button type='button' class='btn btn-primary' onclick='Update_Game_dw()' style='margin-left: 20%'>修改档位</button>" +
        "                    </form>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +

        "    </div>" +
        "    <div id='page14_jChart2' class='TJChart'></div>" +

        "</div>"


    $("#GPU_diV_01").html(div)
}









function daquhao(nums) {
    // alert(123) 玫瑰



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"牌机实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0
    // alert(num)
    for (var i= 1 ;i<= 1500 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count
        if  (i <500){
            var divs = "<div class='span2 box-quick-link blue-background' onclick='Number_0001010("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' >" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>"+i+"号代理数据</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }else if (i <1000){
            var divs = "<div class='span2 box-quick-link blue-background' onclick='Number_0001010("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #953b39'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                       <div class='content'>"+i+"号代理数据</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }else if (i <1500){
            var divs = "<div class='span2 box-quick-link blue-background' onclick='Number_0001010("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #1f7199'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                       <div class='content'>"+i+"号代理数据</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }

    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    $("#GPU_diV_01").html(div)
}













//代理详细信息
function  Number_0001010 () {

    // document.getElementById("titou").style.display = "block"
    // document.getElementById("page14_jChart1").style.display = "block"
    document.getElementById("h5gaikuang").style.display = "none"
    document.getElementById("divtable0002").style.display = "block"

    document.getElementById("divtable0001").style.display = "none"

    $("#GPU_diV_01").css("height","360px")
    var div  = ""
    // alert(getNowFormatDate())
    var  time =   getDay(0)
    var  times =   getDay(-7)
    time  =   time.substring(0,10)
    times  =   times.substring(0,10)
    // alert(times+"========"+time)
    var divs = "<div  style='height: 360px ;OVERFLOW-Y: auto; OVERFLOW-X:hidden;'>" +
        " &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
        "              <button type='button' class='btn btn-primary btn1' onclick='zhou_001()' >一周账务度查询</button>" +
        "                <button type='button' class='btn btn-primary btn1' onclick='yue_001()' >一月账务查询</button>" +

        "</div>"
    div = div+divs
    $("#GPU_diV_01").html(div)
    // zhou_001()



}









//经典压分
function jingdianyafen_0001() {



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 3 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (i ==  1 ){

            var divs = "<div class='span2 box-quick-link blue-background'  onclick='jinshayinsha_001()'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +

                "                        <div class='content'>金鲨银鲨</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else   if  (i == 2 ) {

            var divs = "<div class='span2 box-quick-link blue-background'  onclick='haochejingji_001()' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #148f77'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>豪车竞技</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }else   if  (i == 3 ) {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='senlinwuhui_001()'  ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #8cafed'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #6fcc87'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>森林舞会</div>" +
                "                    </a>" +
                "                </div>"
            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    // div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)



}




//决战百人
function juezhanbairen_0001() {



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 5 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (i ==  1 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='shuiguiji_001()' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +

                "                        <div class='content'>家家乐</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else   if  (i == 2 ) {

            var divs = "<div class='span2 box-quick-link blue-background'  onclick='bairenniuniu_001()' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #148f77'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>百人牛牛</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }else   if  (i == 3 ) {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenhenhongmeifang_001()'  ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #8cafed'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #6fcc87'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>黑红梅方</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }else   if  (i == 4 ) {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang()'  ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #8cafed'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #6fcc87'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>拼三张</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }else   if  (i == 5 ) {

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenDEzhou()'  ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #8cafed'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #6fcc87'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>红蓝大战</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    // div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)



}





//疯狂滚轮
function fengkuanggunlun_0001() {



    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"水浒传实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""
    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 2 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if  (i ==  1 ){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='wangbao_001()' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #fac270'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +

                "                        <div class='content'>水浒传</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs

        }else   if  (i == 2 ) {

            var divs = "<div class='span2 box-quick-link blue-background'  onclick='shuihuzhuan_001()' ><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header' style='background-color: #148f77'>" +
                "<span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 用户数量：<span> "+num+"</spane> </span>        <span id='chu_0001' style='font-size: 16px;margin-top: -10px'> 充值金额：<span> "+num+"</spane> </span><br> <span style='font-size: 16px'>进币数量： <span>"+count_time+" </span></spane>" +
                " <span style='font-size: 16px'> 出币数量：<span  style='color: #f34541'>"+num_count+"</span></spane> <span style='font-size: 16px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>旺宝</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs


        }


    }
    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)

    // div += "<div class='border_buttion'><button onclick='shuihuzhuan0022001(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='shuihuzhuan0022001(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='shuihuzhuan0022001(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"

    $("#GPU_diV_01").html(div)



}







//金鲨银鲨
function jinshayinsha_001() {
    // alert(123)


    var myDate = new Date();

    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();

    var my =  myDate.getMonth()+1
    var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"豪车竞技实时数据";
    $("#Gvip").html(date_copy)


    var div  = ""

    var  jin  = 0
    var  cha  = 0
    var  chu  = 0

    for (var i= 1 ;i<= 1500 ;i++){

        var  num = GetRandomNum(100000, 10000000)
        var count_time =  GetRandomNum(100000, 10000000)
        var  num_count = num  - count_time

        jin += num
        chu += count_time
        cha += num_count

        if (num_count <0){

            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }else {
            var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                "                    <a href='#'>" +
                "                        <div class='header'>" +
                "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                "                        </div>" +
                "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                "                    </a>" +
                "                </div>"

            div = div+divs
        }

    }

    $("#jin").html(jin)
    $("#chu").html(chu)
    $("#cha").html(cha)
    div += "<div class='border_buttion'><button onclick='jinshayinsha000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jinshayinsha000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jinshayinsha000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"
    $("#GPU_diV_01").html(div)
}









function jinshayinsha000122(num) {


    if  (num ==1 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if(num_count <0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='jinshayinsha000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jinshayinsha000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jinshayinsha000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


        $("#GPU_diV_01").html(div)

    }else if (num == 2 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if(num_count <0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77 '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#148f77 '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='jinshayinsha000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jinshayinsha000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jinshayinsha000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


        $("#GPU_diV_01").html(div)

    }else if (num == 3 ){

        var myDate = new Date();

        myDate.getFullYear();
        myDate.getMonth();
        myDate.getDate();

        var my =  myDate.getMonth()+1
        var date_copy  = myDate.getFullYear() +"-"+my+"-"+myDate.getDate()+" "+ myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"旺宝实时数据";
        $("#Gvip").html(date_copy)


        var div  = ""
        var  jin  = 0
        var  cha  = 0
        var  chu  = 0

        for (var i= 1 ;i<= 30 ;i++){

            var  num = GetRandomNum(100000, 10000000)
            var count_time =  GetRandomNum(100000, 10000000)
            var  num_count = num  - count_time

            jin += num
            chu += count_time
            cha += num_count

            if(num_count <0 ){

                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span  style='color: #f34541'>"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs

            }else {
                var divs = "<div class='span2 box-quick-link blue-background' onclick='bairenpinsanzhang_001("+i+")'><div style='height: 15px;background-color:#ffffff '></div>" +
                    "                    <a href='#'>" +
                    "                        <div class='header' style='background-color:#8cafed '>" +
                    "                           <span id='chu_0001' style='font-size: 10px;margin-top: -10px'> 进分：<span> "+num+"</spane> </span><br> <span style='font-size: 10px'>出分： <span>"+count_time+" </span></spane>" +
                    "<br> <span style='font-size: 10px'> 盈利：<span >"+num_count+"</span></spane>"+
                    "                        </div>" +
                    "                        <div class='content'>金鲨银鲨"+i+"</div>" +
                    "                    </a>" +
                    "                </div>"

                div = div+divs


            }


        }
        $("#jin").html(jin)
        $("#chu").html(chu)
        $("#cha").html(cha)

        div += "<div class='border_buttion'><button onclick='jinshayinsha000122(1)' class='border_buttion_001chu'><div style='margin-left: -6px'>初级场</div></button><button onclick='jinshayinsha000122(2)'  class='border_buttion_001zhong'><div style='margin-left: -6px'>中级场</div></button><button onclick='jinshayinsha000122(3)'  class='border_buttion_001gao'><div style='margin-left: -6px'>高级场</div></button></div>"


        $("#GPU_diV_01").html(div)

    }




}













