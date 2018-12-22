window.onload = function () {

    var socket = new WebSocket("ws://" + IPconf + ":" + prot + "/ws/join");
    socket.onopen = function () {
        socket.send("1000" + GetCookies("UG"));
        socket.send("8589" + JSON.stringify({
            BG: "",
            UG: GetCookies("UG")
        }))
        socket.onmessage = function (msg) {
            var newdate = "";
            for (var i = 0; i < msg.data.length; i++) {
                if (i > 3) {
                    newdate = newdate + msg.data[i];
                }
            }

            var obj = toJson(newdate)
            // alert(obj.vf[10])
            //VIP数量
            var vipecharts1 = echarts.init(document.getElementById('vipecharts1'));
            var vipoption1 = {
                title : {
                    text: 'VIP等级数量分布图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}人，占比（{d}%）"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['vip1','vip2','vip3','vip4','vip5','vip6','vip7','vip8','vip9','vip10']
                },
                series : [
                    {
                        name: '数量分布图',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:obj.VF[1], name:'vip1'},
                            {value:obj.VF[2], name:'vip2'},
                            {value:obj.VF[3], name:'vip3'},
                            {value:obj.VF[4], name:'vip4'},
                            {value:obj.VF[5], name:'vip5'},
                            {value:obj.VF[6], name:'vip6'},
                            {value:obj.VF[7], name:'vip7'},
                            {value:obj.VF[8], name:'vip8'},
                            {value:obj.VF[9], name:'vip9'},
                            {value:obj.VF[10], name:'vip10'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            vipecharts1.setOption(vipoption1);

            //用户活跃度
            var vipecharts2 = echarts.init(document.getElementById('vipecharts2'));
            var vipoption2 = {
                title : {
                    text: 'VIP用户活跃度',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['活跃VIP用户','不活跃VIP用户']
                },
                series : [
                    {
                        name: '连续在线人数比例',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:obj.VH[0], name:'不活跃VIP用户'},
                            {value:obj.VH[1], name:'活跃VIP用户'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            vipecharts2.setOption(vipoption2);

        }
    }






};
