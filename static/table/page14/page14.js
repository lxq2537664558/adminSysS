$(document).ready(function(){
	
	var page14_jChart1_chart = echarts.init(document.getElementById('page14_jChart1'));
	page14_jChart1_chart.setOption({
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['收入（元）']
		},
		xAxis: [
			{
				type: 'category',
				data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
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
				type:'bar',
				data:[267, 306, 220, 330, 360,267, 306, 220, 330, 360,267, 306, 220, 330, 356,267, 306, 220, 330, 360, 360,267, 306, 220]
			}
		]
	});
});
