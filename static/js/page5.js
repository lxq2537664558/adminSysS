$(document).ready(function(){
	
	var page5_jChart1_chart = echarts.init(document.getElementById('page5_jChart1'));
	page5_jChart1_chart.setOption({
		legend: {
			data:['收入（万元）','利润（万元）']
		},
		xAxis: [
			{
				type: 'category',
				data: ['2010','2011','2012','2013','2014']
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '收入（万元）',
				max: 400,
				min: 0
			},
			{
				type: 'value',
				name: '利润（万元）',
				max: 400,
				min: 0
			}
		],
		series : [
			{
				name:'收入（万元）',
				type:'bar',
				data:[267, 306, 220, 330, 360]
			},
			{
				name:'利润（万元）',
				type:'line',
				yAxisIndex: 1,
				data:[123, 231, 144, 122, 211]
			}
		]
	});
	
	var page5_jTreeView1_setting = {
	};
	var page5_jTreeView1_zNodes =[
		{ name:''},
		{ name:'用户查询'},
		{ name:'解封封禁'},
		{ name:'禁言解禁'},
		{ name:'支付查询'},
		{ name:'日志查询r'},
		{ name:'大区汇总'},
		{ name:'发送邮件'},
		{ name:'公告系统'},
		{ name:'游戏活动'},
		{ name:'在线数据'},
		{ name:'收入日报'},
		{ name:'VIP系统'},
		{ name:'商城概况'},
		{ name:'核弹详情'},
		{ name:'小区详情'},
		{ name:'充值卡详情'},
		{ name:'推广明细'}
	]
	$.fn.zTree.init($('#page5_jTreeView1_ztree'), page5_jTreeView1_setting, page5_jTreeView1_zNodes);
});

$(function(){
	$("#page5_jDateTimePicker1_edit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "yy-mm-dd"
	});
});



$(function(){
    $("#page5_jDateTimePicker2_edit").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd"
    });
});