window.onload = function () {
    var socket = new WebSocket("ws://" + IPconf + ":" + prot + "/ws/join");
    socket.onopen = function () {
        socket.send("1000" + GetCookies("UG"));
        socket.send("9057" + JSON.stringify({
            BG: "",
            UG: GetCookies("UG"),
            TYPE: parseInt(1)
        }));
        socket.onmessage = function (msg) {
            var newdate = "";
            for (var i = 0; i < msg.data.length; i++) {
                if (i > 3) {
                    newdate = newdate + msg.data[i];
                }
            }
            var obj = toJson(newdate);

            for (var i = 0; i < obj.BL.length; i++) {
                console.log(obj.BL[i] + "<br>");
            }

            //在线数据柱状图
            var onecharts = echarts.init(document.getElementById('onecharts'));
            // 指定图表的配置项和数据
            var onoption1 = {
                title: {
                    text: '当日在线人数趋势图',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: "{c}人"
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        obj.BL[23].DateS,
                        obj.BL[22].DateS,
                        obj.BL[21].DateS,
                        obj.BL[20].DateS,
                        obj.BL[19].DateS,
                        obj.BL[18].DateS,
                        obj.BL[17].DateS,
                        obj.BL[16].DateS,
                        obj.BL[15].DateS,
                        obj.BL[14].DateS,
                        obj.BL[13].DateS,
                        obj.BL[12].DateS,
                        obj.BL[11].DateS,
                        obj.BL[10].DateS,
                        obj.BL[9].DateS,
                        obj.BL[8].DateS,
                        obj.BL[7].DateS,
                        obj.BL[6].DateS,
                        obj.BL[5].DateS,
                        obj.BL[4].DateS,
                        obj.BL[3].DateS,
                        obj.BL[2].DateS,
                        obj.BL[1].DateS,
                        obj.BL[0].DateS
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '',
                        type: 'line',
                        stack: '总量',
                        data: [
                            obj.BL[23].Player,
                            obj.BL[22].Player,
                            obj.BL[21].Player,
                            obj.BL[20].Player,
                            obj.BL[19].Player,
                            obj.BL[18].Player,
                            obj.BL[17].Player,
                            obj.BL[16].Player,
                            obj.BL[15].Player,
                            obj.BL[14].Player,
                            obj.BL[13].Player,
                            obj.BL[12].Player,
                            obj.BL[11].Player,
                            obj.BL[10].Player,
                            obj.BL[9].Player,
                            obj.BL[8].Player,
                            obj.BL[7].Player,
                            obj.BL[6].Player,
                            obj.BL[5].Player,
                            obj.BL[4].Player,
                            obj.BL[3].Player,
                            obj.BL[2].Player,
                            obj.BL[1].Player,
                            obj.BL[0].Player
                        ]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            onecharts.setOption(onoption1);

        }
    }


}