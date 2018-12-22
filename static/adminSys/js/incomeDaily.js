$(function () {
    $(".incomeDaily>.sub>li>a").click(function () {
        $(".all").removeClass("all");
        $(".other").removeClass("other");
        $(this).addClass("other");
    });
})


window.onload = function () {
    //收入日报折线图
    // 基于准备好的dom，初始化echarts实例
    var inecharts = echarts.init(document.getElementById('inecharts'));
    // 指定图表的配置项和数据
    var option1 = {
        title: {
            show:"true",
            text: '收入日报'
        },
        tooltip: {
            formatter: "{b}<br/>收入（元）:{c}"
        },
        legend: {
            data:['一月总盈利（元）']
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            axisLabel:{
                formatter:'{value}'
            },
            data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
        },
        yAxis: {},
        series: [{
            name: '一月总盈利（元）',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36],
            itemStyle:{
                normal:{
                    color:'#188df0'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    inecharts.setOption(option1);



}


