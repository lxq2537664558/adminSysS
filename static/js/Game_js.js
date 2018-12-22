



function  Inform_chart( msg) {


    // alert(msg)

    alert(msg.length)
    for (var i = 0 ; i < msg.length;i++ ){
        //alert("======Inform_chart====="+msg[i].Tm.substring(11,14))
            console.log("======Inform_chart====="+msg[i].Tm.substring(11,14))
    }
}

//后台请求森林舞会房间信息
function Select_senlinwuhui_inform(num ) {


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



//请求黑红梅方服务器数据
function bairenheihongmeifang_001(mag) {
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

    var   huangsheng = 0
    var   huangfu = 0


    var  baizi1 =0
    var  shunjin1 =0
    var  jinhua1 =0
    var  shunzi1 =0
    var  duizi1 =0
    var  sanpai1 =0




    socket = new WebSocket("ws://"+IPconf+":"+prot+"/ws/join");
    socket.onopen = function() {
        socket.send("1000"+GetCookies("UG"));
        socket.send("9085" + JSON.stringify({
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

                if (obj.RM[i].Tp[4] == 1 ) {
                    huangsheng++
                }else{
                    huangfu++
                }

                // alert(obj.RM[i].Px)
                for(var j = 0;j <= 5;j++){

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
                // alert(123)

            }

//            alert(duizi1+"========="+sanpai1)
            var div = "<div style='width: 100%;height: 100%;background-color: #1e2a4c; background-color:rgba(0,0,0,0.3) ;position: absolute' id='div_123456'> " +
                "<div style='background-color: #00acec;width: 30px;height: 20px;margin-left: 75.7%;margin-top: 10%' onclick='Noet_div()'>关闭</div>" +
                "<div style='background-color: #9ebae1 ;width: 900px;height: 400px; margin-left: 30%'>" +
                "<div style='margin-left: 16%;'><h5><span>该房间金币总输赢：<span>赢<span>"+zhuangying+"</span>输<span >"+zhuangSshu+"</span></span></span> <span>黑桃:<span id='qinglongsheng'>胜<span>"+qinglongsheng+"</span>负<span id='qinglongfu'>"+qinglongfu+"</span></span>  红桃:<span id='zhuquesheng'>胜<span>"+zhuquesheng+"</span>负<span id='zhuqueu'>"+zhuqueu+"</span></span>  梅花:<span id='xuanwusheng'>胜<span>"+xuanwusheng+"</span>负<span id='xuanwufu'>"+xuanwufu+"</span></span> 方片:<span id='baihusheng'>胜<span>"+baihusheng+"</span>负<span id='baihufu'>"+baihufu+"</span></span>  皇:<span id='baihusheng'>胜<span>"+huangsheng+"</span>负<span id='baihufu'>"+huangfu+"</span></span>   </span></h5></div>" +
                "<div  style='margin-left: 10%'>牌型：" +
                "<h5>黑桃：<span id='baiz'>"+baizi1+"</span></h5>" +
                "<h5>红桃：<span id='shunjin'>"+shunjin1+"</span></h5>" +
                "<h5>梅花：<span id='jinhua'>"+jinhua1+"</span></h5>" +
                "<h5>方片：<span id='shunzi'>"+shunzi1+"</span></h5>" +
                "<h5>皇：<span id='duizi'>"+duizi1+"</span></h5>" +
                // "<h5>散牌：<span id='sanpai'>"+sanpai1+"</span></h5>" +
                "<table>" +
                "<tr><td>黑桃</td><td>红桃</td><td>梅花</td><td>方片</td><td>皇</td></tr>" +
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

