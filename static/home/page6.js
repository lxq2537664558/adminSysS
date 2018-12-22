$(document).ready(function(){
	
	
	page6_jContainer1_obj=$('#page6_jContainer1_container').layout({
		onresize:function(){
			page6_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page6_jContainer1_center'
		,north__paneSelector:'.page6_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	page6_jContainer2_DataGrids=new Array("page6_jDataGrid1","24");
	page6_jContainer2_obj=$('#page6_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page6_jContainer2_DataGrids);},
		center__paneSelector:'.page6_jContainer2_center'
		,maskIframesOnResize: true
	});
});

$(function(){
	$("#page6_jDateTimePicker1_edit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "yy-mm-dd"
	});
});

$(function(){
	$("#page6_jDateTimePicker2_edit").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "yy-mm-dd"
	});
});

jQuery().ready(function(){
	jQuery('#page6_jDataGrid1_table').jqGrid({
		datatype: 'local',
		viewrecords: true,
		colNames:['标题','','','','',''],
		colModel:[
			{name:'A0',index:'A0', width:64},
			{name:'A1',index:'A1', width:64},
			{name:'A2',index:'A2', width:64},
			{name:'A3',index:'A3', width:64},
			{name:'A4',index:'A4', width:64},
			{name:'A5',index:'A5', width:64}
		],
		width: '100%',
		height: '100%'
	}).navGrid('#page6_jDataGrid1_pager',{edit:false,add:false,del:false});
	$('#page6_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:''});
	$('#page6_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page6_jContainer1_obj.resizeAll();
});
