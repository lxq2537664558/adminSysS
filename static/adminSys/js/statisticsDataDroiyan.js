$(function () {
    //1.监听一级菜单的点击事件
    $(".nav_1>li").click(function () {
        //1.1拿到二级菜单
        var $sub = $(this).children(".sub_1");
        //1.2让二级菜单展开
        $sub.slideDown(500);
        //1.3拿到所有非当前的二级菜单
        var other = $(this).siblings().children(".sub_1");
        //1.4让所有非当前二级菜单收起
        other.slideUp(500);
        //1.5让被点击的一级菜单箭头旋转
        $(this).addClass("current");
        //1.6让所有非被所有点击的一级菜单还原
        $(this).siblings().removeClass("current");
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

    //总览和各个房间切换
    $(".all").click(function () {
        $(".singleRoomList").hide();
        $(".allList").show();
        $(".singleRoom").removeClass("current");
        $(this).addClass("current");

    });
    $(".singleRoom").click(function () {
        $(".allList").hide();
        $(".singleRoomList").show();
        $(".all").removeClass("current");
        $(this).addClass("current");
    });

    //选项卡切换
    $(".rh_title>li").click(function () {
        $(this).addClass("comm");
        $(this).siblings().removeClass("comm");
        var index = $(this).index();
        var $li = $(".rh_cont>li").eq(index);
        $li.siblings().removeClass("show");
        $li.addClass("show");
    });

    //场次切换
    $(".btn>a").click(function () {
        $(this).addClass("site");
        $(this).siblings().removeClass("site");
    });

});
window.onload = function () {
    //柱状图
    // 基于准备好的dom，初始化echarts实例
    var histogram = echarts.init(document.getElementById('histogram'));
    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '捕鱼'
        },
        tooltip: {},
        legend: {
            data:['用户数量']
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            data: ["1","2","3","4","5","6"]
        },
        yAxis: {},
        series: [{
            name: '用户数量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    histogram.setOption(option1);

    //折线图
    var lineCharts = echarts.init(document.getElementById('lineCharts'));
    var option = {
        title: {
            text: '捕鱼'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['盈利']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'盈利',
                type:'line',
                stack: '总量',
                data:[100, 200, -200, 100, 50, 54, -45]
            }
        ]
    };
    lineCharts.setOption(option);
}