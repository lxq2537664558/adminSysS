$(document).ready(function(){
	
	page3_jContainer1_tabs=new Array("page3_jTabControl1");
	page3_jContainer1_obj=$('#page3_jContainer1_container').layout({
		onresize:function(){
			Vjjq.refreshContainer(page3_jContainer1_tabs,'');
			page3_jContainer3_obj.resizeAll();},
		center__paneSelector:'.page3_jContainer1_center'
		,north__paneSelector:'.page3_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,west__paneSelector:'.page3_jContainer1_west'
		,west__size:	264
		,maskIframesOnResize: true
	});
	
	page3_jContainer3_DataGrids=new Array("page3_jDataGrid2","49");
	page3_jContainer3_obj=$('#page3_jContainer3_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page3_jContainer3_DataGrids);},
		center__paneSelector:'.page3_jContainer3_center'
		,north__paneSelector:'.page3_jContainer3_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	$('#page3_jTabControl1_body').tabs({
		heightStyle: "fill",
		activate: function( event, ui ) {
			page3_jContainer3_obj.resizeAll();
		}
	});
	
	var page3_jTreeView1_setting = {
	};
	var page3_jTreeView1_zNodes =[
		{ name:'系统管理', open: true,
			children: [
			{ name:'部门管理'},
			{ name:'用户管理'},
			{ name:'角色管理'},
			{ name:'组管理'},
			{ name:'日志管理'}
			]}
	]
	$.fn.zTree.init($('#page3_jTreeView1_ztree'), page3_jTreeView1_setting, page3_jTreeView1_zNodes);
});

jQuery().ready(function(){
	jQuery('#page3_jDataGrid2_table').jqGrid({
		datatype: 'local',
		multiselect: true,
		viewrecords: true,
		colNames:['状态','用户编号','用户姓名','组','性别','部门','电话','手机','Email','备注'],
		colModel:[
			{name:'A0',index:'A0', width:51},
			{name:'A1',index:'A1', width:83},
			{name:'A2',index:'A2', width:79},
			{name:'A3',index:'A3', width:54},
			{name:'A4',index:'A4', width:52},
			{name:'A5',index:'A5', width:110},
			{name:'A6',index:'A6', width:64},
			{name:'A7',index:'A7', width:64},
			{name:'A8',index:'A8', width:64},
			{name:'A9',index:'A9', width:64}
		],
		width: '100%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page3_jDataGrid2_pager')
	}).navGrid('#page3_jDataGrid2_pager',{edit:false,add:false,del:false});
	$('#page3_jDataGrid2_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:'',A8:'',A9:''});
	$('#page3_jDataGrid2_table').trigger('reloadGrid');
})

$(document).ready(function(){
	page3_jContainer1_obj.resizeAll();
});
