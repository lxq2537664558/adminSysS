$(document).ready(function(){
	
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
		showOn: "button",
		buttonImage: "images/J_calendar.gif",
		buttonImageOnly: true,
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

$(function(){
	$("#page5_jDateTimePicker3_edit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "yy-mm-dd"
	});
});

$(function(){
	$("#page5_jDateTimePicker4_edit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "yy-mm-dd"
	});
});
