$(document).ready(function(){

	var page14_jChart1_chart = echarts.init(document.getElementById('page14_jChart1'));
	page14_jChart1_chart.setOption({
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['进分（元）','出分（元）']
		},
		xAxis: [
			{
				type: 'category',
				data: ['2010','2011','2012','2013','2014']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series : [
			{
				name:'收入（元）',
				type:'line',
				data:[267, 100, 220, 330, 360]
			},
			{
				name:'利润（元）',
				type:'line',
				data:[123, 231, 144, 320, 211]
			}
		]
	});
});




function getNowFormatDate(num) {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate() - num ;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

function getDay(day){
    var today = new Date();

    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;

    today.setTime(targetday_milliseconds); //注意，这行是关键代码

    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear+"-"+tMonth+"-"+tDate;
}
function doHandleMonth(month){
    var m = month;
    if(month.toString().length == 1){
        m = "0" + month;
    }
    return m;
}


function mGetDate(year, month){
    var d = new Date(year, month, 0);
    return d.getDate();
}




function zhou_001() {
    $("#titou").html("一周账务查询")
    SetCookie("sataic",7)
    $("#paijijin").html("3754658965")
    $("#paijichu").html("456368534")
    if (-2365378 <0 ){
        $("#paijizong").css("color","#953b39")
    }
    $("#paijizong").html("-2365378")

    var  num = []
    var  count_time = []
    for (var i  = 0; i <7 ;i++){

        count_time.push( GetRandomNum(100, 1000))
    }

    for (var i  = 0; i <7 ;i++){

        num.push(  GetRandomNum(100, 1000))
    }


    $("#zong1").html("1449704787976")
    $("#zong2").html("1202119352339")
    $("#zong3").html("-247585435637")
    if (-247585435637 <0 ){
        $("#zong3").css("color","red")
    }
	var times = getDay(0)

     var  time =  getDay(-6)
	times  =   times.substring(0,10)
    time  =   time.substring(0,10)
    $("#time_pork_01").html(time)
    $("#time_pork_02").html(times)

    var  time8 =  getDay(-6)
    var  time7 =  getDay(-5)
    var  time6 =  getDay(-4)
    var  time5 =  getDay(-3)
    var  time4 =  getDay(-2)
    var  time3 =  getDay(-1)
    var  time2 =  getDay(0)
    $("#page14_jChart1").css("width","1000px")






    var  num1 = num[0] - count_time[0]
    var  num2 = num[1] - count_time[1]
    var  num3 = num[2] - count_time[2]
    var  num4 = num[3] - count_time[3]
    var  num5 = num[4] - count_time[4]
    var  num6 = num[5] - count_time[5]
    var  num7 = num[6] - count_time[6]



  //  alert(time)
    var page14_jChart1_chart = echarts.init(document.getElementById('page14_jChart1'));
    page14_jChart1_chart.setOption({
        tooltip : {
            trigger: 'axis'
        },

        xAxis: [
            {
                type: 'category',
                data:  [time8,time7,time6,time5,time4,time3,time2]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series : [
            {
                name:'盈利（分）',
                type:'line',
                data:[-155,726,-377,144,-237,588,244]
            }
        ]

    });
  //      $("#page14_jChart11").css("width","1000px")
  //
  //     var  num = []
  //     var  count_time = []
  //     for (var i  = 0; i <7 ;i++){
  //
  //         count_time.push( GetRandomNum(100000, 10000000))
  //     }
  //
  //     for (var i  = 0; i <7 ;i++){
  //
  //         num.push(  GetRandomNum(100000, 10000000))
  //     }
  //
  //
  //
  //
  //   var times = getDay(0)
  //
  //      var  time =  getDay(-6)
  //   times  =   times.substring(0,10)
  //     time  =   time.substring(0,10)
  //     $("#time_pork_01").html(time)
  //     $("#time_pork_02").html(times)
  //
  //     var  time2 =  getDay(-6)
  //     var  time3 =  getDay(-5)
  //     var  time4 =  getDay(-4)
  //     var  time5 =  getDay(-3)
  //     var  time6 =  getDay(-2)
  //     var  time7 =  getDay(-1)
  //     var  time8 =  getDay(0)
  //     $("#page14_jChart1").css("width","1000px")
  //
  //
  //
  //
  //
  //     var  num1 = num[0] - count_time[0]
  //     var  num2 = num[1] - count_time[1]
  //     var  num3 = num[2] - count_time[2]
  //     var  num4 = num[3] - count_time[3]
  //     var  num5 = num[4] - count_time[4]
  //     var  num6 = num[5] - count_time[5]
  //     var  num7 = num[6] - count_time[6]
  //
  //
  //   var div  = ""
  //
  //
  //   var num_list = num[0] + num[1] + num[2] + num[3] + num[4] + num[5] + num[6]
  //   var count_time_list = count_time[0]+count_time[1]+count_time[2]+count_time[3]+count_time[4]+count_time[5]+count_time[6]
  //   var  num_list_001  = num1+num2+num3+num4+num5+num6+num7
  //       div = "<table style='width:600px; background-color: #5DADA6'>" +
  //       "<tr><td>日期</td><td>总进分</td><td>总出分</td><td>差值</td> </tr>" +
  //       "<tr><td>"+time2+"</td><td>"+num[0]+"</td><td>"+count_time[0]+"</td><td id='num1_001'> "+num1+"</td> </tr>" +
  //       "<tr><td>"+time3+"</td><td>"+num[1]+"</td><td>"+count_time[1]+"</td><td id='num1_002'>"+num2+"</td> </tr>" +
  //       "<tr><td>"+time4+"</td><td>"+num[2]+"</td><td>"+count_time[2]+"</td><td id='num1_003'>"+num3+"</td> </tr>" +
  //       "<tr><td>"+time5+"</td><td>"+num[3]+"</td><td>"+count_time[3]+"</td><td id='num1_004'>"+num4+"</td> </tr>" +
  //       "<tr><td>"+time6+"</td><td>"+num[4]+"</td><td>"+count_time[4]+"</td><td id='num1_005'>"+num5+"</td> </tr>" +
  //       "<tr><td>"+time7+"</td><td>"+num[5]+"</td><td>"+count_time[5]+"</td><td id='num1_006'>"+num6+"</td> </tr>" +
  //       "<tr><td>"+time8+"</td><td>"+num[6]+"</td><td>"+count_time[6]+"</td><td id='num1_007'>"+num7+"</td> </tr>" +
  //       "<tr><td>合计：</td><td>"+num_list+"</td><td>"+count_time_list+"</td><td id='num1_007'>"+num_list_001+"</td> </tr>" +
  //       // "<tr><td>百人牛牛</td><td>95248215123</td><td>75146358245</td><td style='color: #953b39'>-20101856878</td> </tr>" +
  //       // "<tr><td>黑红梅方</td><td>1352462595415</td><td >95248218548</td><td style='color: #953b39'>-1257214376867</td> </tr>" +
  //       // "<tr><td>水果机</td><td>956362415</td><td>965248158285</td><td>964291795771</td> </tr>" +
  //
  //           "" +
  //           "" +
  //           "</table>"+
  //           "</div>"
  //
  //
  //
  //
  //       // "<tr><td>合计总账</td><td>1449704787976</td><td>1202119352339</td><td style='color: #953b39'>-247585435637</td> <td>|</td></tr>"+
  //
  //
  //
  //
  //
  //
  //
  //   $("#page14_jChart11").html(div)



}


function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}




function yue_001() {
    $("#titou").html("一月账务查询")
    var nums = GetRandomNum(1000, 10000)

    var  num = []
    var  count_time = []

    var   count_cha  = []

    for (var i  = 0; i <30 ;i++){

        count_time.push( GetRandomNum(100000, 10000000))
    }

    for (var i  = 0; i <30 ;i++){

        num.push(  GetRandomNum(100000, 10000000))
    }

    for (var i  = 0; i <30 ;i++){
        count_cha.push(  count_time[i]- num[i])
    }






    $("#paijijin").html("4572365787")
    $("#paijichu").html("89757064356")
    if (452379780976 < 0 ){
        $("#paijizong").css("color","#953b39")
    }else{
        $("#paijizong").css("color","#000000")
    }
    $("#paijizong").html("452379780976")

    var date = new Date();

    var   count =  mGetDate(date.getFullYear(),date.getMonth()+1)
    SetCookie("sataic",count)
    // alert(count)
    //
    // var times = getDay(0)
    //
    // var  time =  getDay(-count)
    //
    //
    //
    var  ti =  1+date.getMonth()
    var  tim  =  1+date.getMonth()


   // alert(date.getMonth()+1)
     var   times = date.getFullYear() +"-"+ ti +"-00"
    var   time = date.getFullYear() +"-"+ tim  +"-"+count
    $("#time_pork_01").html(times)
    $("#time_pork_02").html(time)


    $("#page14_jChart1").css("width","1400px")

    // var  div = ""
    //
    //
    // div += "<table style='width:600px; background-color: #5DADA6'>"
    // div += "<tr><td>日期</td><td>总进分</td><td>总出分</td><td>差值</td> </tr>"
    //     // "<tr><td>"+num4+"</td><td>"+num[0]+"</td><td>"+count_time[0]+"</td><td id='num1_001'> "+num7+"</td> </tr>" +
    //     // "<tr><td>"+num5+"</td><td>"+num[1]+"</td><td>"+count_time[1]+"</td><td id='num1_002'>"+num8+"</td> </tr>" +
    //     // "<tr><td>"+num1+"</td><td>"+num[2]+"</td><td>"+count_time[2]+"</td><td id='num1_003'>"+num9+"</td> </tr>" +
    //     // "<tr><td>"+num2+"</td><td>"+num[3]+"</td><td>"+count_time[3]+"</td><td id='num1_004'>"+num10+"</td> </tr>" +
    //     // "<tr><td>合计：</td><td>"+num_list+"</td><td>"+count_time_list+"</td><td id='num1_007'>"+num_list_001+"</td> </tr>" +
    //     // "<tr><td>"+time6+"</td><td>"+num[4]+"</td><td>"+count_time[4]+"</td><td id='num1_005'>"+num5+"</td> </tr>" +
    //     // "<tr><td>"+time7+"</td><td>"+num[5]+"</td><td>"+count_time[5]+"</td><td id='num1_006'>"+num6+"</td> </tr>" +
    //     // "<tr><td>"+time8+"</td><td>"+num[6]+"</td><td>"+count_time[6]+"</td><td id='num1_007'>"+num7+"</td> </tr>" +
    //     // "<tr><td>百人牛牛</td><td>95248215123</td><td>75146358245</td><td style='color: #953b39'>-20101856878</td> </tr>" +
    //     // "<tr><td>黑红梅方</td><td>1352462595415</td><td >95248218548</td><td style='color: #953b39'>-1257214376867</td> </tr>" +
    //     // "<tr><td>水果机</td><td>956362415</td><td>965248158285</td><td>964291795771</td> </tr>" +
    //
    // var  num_001  = 0
    // var  count_time_001 = 0
    // var  count_cha_001 = 0
    // for(var  i = 0;i<count;i++) {
    //     var  s = i+1
    //     div += "<tr><td>"+s+"</td><td>"+num[i]+"</td><td>"+count_time[i]+"</td><td id='num1_001'> "+count_cha[i]+"</td> </tr>"
    //     num_001+= num[i]
    //     count_time_001 += count_time[i]
    //     count_cha_001 += count_cha[i]
    // }
    //
    // div += "<tr><td>合计：</td><td>"+num_001+"</td><td>"+count_time_001+"</td><td id='num1_001'> "+count_cha_001+"</td> </tr>"
    // div +=   "</table></div>"
    //
    //
    //
    // $("#page14_jChart11").html(div)










    //
    // //柱形图初始化
    // chart = new Highcharts.Chart({
    //     chart: {
    //         renderTo: 'page14_jChart1',
    //         type: 'column'
    //     },
    //     title: {
    //         text: '数据柱形图表'
    //     },
    //     subtitle: {
    //         text: '月数据总结'
    //     },
    //     xAxis: {
    //         categories: [
    //             '01',
    //             '02',
    //             '03',
    //             '04',
    //             '05',
    //             '06',
    //             '07',
    //             '08',
    //             '09',
    //             '10',
    //             '11',
    //             '12',
    //             '13',
    //             '14',
    //             '15',
    //             '16',
    //             '17',
    //             '18',
    //             '19',
    //             '20',
    //             '21',
    //             '22',
    //             '23',
    //             '24',
    //             '25',
    //             '26',
    //             '27',
    //             '28',
    //             '29',
    //             '30'
    //         ]
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: '数据'
    //         }
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         backgroundColor: '#FFFFFF',
    //         align: 'left',
    //         verticalAlign: 'top',
    //         x: 100,
    //         y: 70,
    //         floating: true,
    //         shadow: true
    //     },
    //     tooltip: {
    //         formatter: function () {
    //             return '' +
    //                 this.x + ': ' + this.y + ' 金币';
    //         }
    //     },
    //     plotOptions: {
    //         column: {
    //             pointPadding: 0.2,
    //             borderWidth: 0
    //         }
    //     },
    //     series: [{
    //         name: '进分',
    //         data: count_time
    //
    //     }, {
    //         name: '出分',
    //         data: num
    //
    //     }, {
    //         name: '差值',
    //         data: count_cha
    //
    //     }]
    // });
    //
    //





    // for(var  i = 0;i<count;i++) {
    //
    //
    //
    //     count_cha_001 += count_cha[i]
    // }



    // $("#page14_jChart1").css("width","1200px")
    var page14_jChart1_chart = echarts.init(document.getElementById('page14_jChart1'));
    page14_jChart1_chart.setOption({
        tooltip : {
            trigger: 'axis'
        },

        xAxis: [
            {
                type: 'category',
                data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series : [
            {
                name:'盈利（元）',
                type:'line',
                data:count_cha
            }
        ]
    });
}




function ji_001() {

    $("#titou").html("一季度账务查询")
    $("#paijijin").html("8754343567863")
    $("#paijichu").html("72347654657921")
    if (452379780976 < 0 ){
        $("#paijizong").css("color","#953b39")
    }else{
        $("#paijizong").css("color","#000000")
    }
    $("#paijizong").html("12346806433")




    // alert(getQuarterStartDate()+"==========="+getQuarterEndDate())


    $("#time_pork_01").html("")
    $("#time_pork_02").html("")

    $("#page14_jChart1").css("width","1200px")

    var  num4 =   nowYear + "-01-01 ~ " + nowYear +"-03-"+ getMonthDays(3)
    var  num5 =   nowYear + "-04-01 ~ " + nowYear +"-06-"+ getMonthDays(6)

    var  num1 =   nowYear + "-07-01 ~ " + nowYear +"-09-"+ getMonthDays(9)
    var  num2 =   nowYear + "-10-01 ~ " + nowYear +"-12-"+ getMonthDays(12)

    var  num = []
    var  count_time = []
    for (var i  = 0; i <4 ;i++){

        count_time.push( GetRandomNum(100, 1000))
    }

    for (var i  = 0; i <4 ;i++){

        num.push(  GetRandomNum(100, 1000))
    }


    var  num7 = num[0] - count_time[0]
    var  num8 = num[1] - count_time[1]
    var  num9 = num[2] - count_time[2]
    var  num10 = num[3] - count_time[3]

    SetCookie("sataic",123456)

    var page14_jChart1_chart = echarts.init(document.getElementById('page14_jChart1'));
    page14_jChart1_chart.setOption({
        tooltip : {
            trigger: 'axis'
        },

        xAxis: [
            {
                type: 'category',
                data: [num4,num5,num1,num2]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series : [
            {
                name:'进分（元）',
                type:'line',
                data:[8, 739, 187, -238]
            }
        ]
    });







    //
    // $("#page14_jChart11").css("width","1000px")
    //
    // var  num = []
    // var  count_time = []
    // for (var i  = 0; i <7 ;i++){
    //
    //     count_time.push( GetRandomNum(100000, 10000000))
    // }
    //
    // for (var i  = 0; i <7 ;i++){
    //
    //     num.push(  GetRandomNum(100000, 10000000))
    // }
    //
    //
    //
    //
    // var times = getDay(0)
    //
    // var  time =  getDay(-6)
    // times  =   times.substring(0,10)
    // time  =   time.substring(0,10)
    // $("#time_pork_01").html(time)
    // $("#time_pork_02").html(times)
    //
    // var  time2 =  getDay(-6)
    // var  time3 =  getDay(-5)
    // var  time4 =  getDay(-4)
    // var  time5 =  getDay(-3)
    // var  time6 =  getDay(-2)
    // var  time7 =  getDay(-1)
    // var  time8 =  getDay(0)
    // $("#page14_jChart1").css("width","1000px")
    //
    //
    //
    //
    //
    // var  num1 = num[0] - count_time[0]
    // var  num2 = num[1] - count_time[1]
    // var  num3 = num[2] - count_time[2]
    // var  num4 = num[3] - count_time[3]
    // var  num5 = num[4] - count_time[4]
    // var  num6 = num[5] - count_time[5]
    // var  num7 = num[6] - count_time[6]
    // var num_list = num[0] + num[1] + num[2] + num[3]
    // var count_time_list = count_time[0]+count_time[1]+count_time[2]+count_time[3]
    // var  num_list_001  = num7+num8+num9+num10
    //
    // var div  = ""
    //
    //
    // div = "<table style='width:600px; background-color: #5DADA6'>" +
    //     "<tr><td>日期</td><td>总进分</td><td>总出分</td><td>差值</td> </tr>" +
    //     "<tr><td>"+num4+"</td><td>"+num[0]+"</td><td>"+count_time[0]+"</td><td id='num1_001'> "+num7+"</td> </tr>" +
    //     "<tr><td>"+num5+"</td><td>"+num[1]+"</td><td>"+count_time[1]+"</td><td id='num1_002'>"+num8+"</td> </tr>" +
    //     "<tr><td>"+num1+"</td><td>"+num[2]+"</td><td>"+count_time[2]+"</td><td id='num1_003'>"+num9+"</td> </tr>" +
    //     "<tr><td>"+num2+"</td><td>"+num[3]+"</td><td>"+count_time[3]+"</td><td id='num1_004'>"+num10+"</td> </tr>" +
    //     "<tr><td>合计：</td><td>"+num_list+"</td><td>"+count_time_list+"</td><td id='num1_007'>"+num_list_001+"</td> </tr>" +
    //     // "<tr><td>"+time6+"</td><td>"+num[4]+"</td><td>"+count_time[4]+"</td><td id='num1_005'>"+num5+"</td> </tr>" +
    //     // "<tr><td>"+time7+"</td><td>"+num[5]+"</td><td>"+count_time[5]+"</td><td id='num1_006'>"+num6+"</td> </tr>" +
    //     // "<tr><td>"+time8+"</td><td>"+num[6]+"</td><td>"+count_time[6]+"</td><td id='num1_007'>"+num7+"</td> </tr>" +
    //     // "<tr><td>百人牛牛</td><td>95248215123</td><td>75146358245</td><td style='color: #953b39'>-20101856878</td> </tr>" +
    //     // "<tr><td>黑红梅方</td><td>1352462595415</td><td >95248218548</td><td style='color: #953b39'>-1257214376867</td> </tr>" +
    //     // "<tr><td>水果机</td><td>956362415</td><td>965248158285</td><td>964291795771</td> </tr>" +
    //
    //     "" +
    //     "" +
    //     "</table>"+
    //     "</div>"
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // $("#page14_jChart11").html(div)









}



