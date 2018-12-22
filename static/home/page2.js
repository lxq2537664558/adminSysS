$(document).ready(function(){


	page2_jContainer1_obj=$('#page2_jContainer1_container').layout({
		onresize:function(){
			page2_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page2_jContainer1_center'
		,north__paneSelector:'.page2_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});

	page2_jContainer2_DataGrids=new Array("page2_jDataGrid1","49");
	page2_jContainer2_obj=$('#page2_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page2_jContainer2_DataGrids);},
		center__paneSelector:'.page2_jContainer2_center'
		,maskIframesOnResize: true
	});
});

jQuery().ready(function(){
	jQuery('#page2_jDataGrid1_table').jqGrid({
		datatype: 'local',
		multiselect: false,
		viewrecords: false,
		colNames:['用户昵称','用户uid','创建时间','等级','Vip等级','元宝数量','赠送数量','金币数量','账号','设备型号'],
		colModel:[
			{name:'A0',index:'A0', width:93},
			{name:'A1',index:'A1', width:64},
			{name:'A2',index:'A2', width:64},
			{name:'A3',index:'A3', width:94},
			{name:'A4',index:'A4', width:64},
			{name:'A5',index:'A5', width:127},
			{name:'A6',index:'A6', width:130},
			{name:'A7',index:'A7', width:64},
            {name:'A8',index:'A8', width:130},
            {name:'A9',index:'A9', width:64}
		],
		width: '100%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page2_jDataGrid1_pager')
	}).navGrid('#page2_jDataGrid1_pager',{edit:false,add:false,del:false});
	$('#page2_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
	$('#page2_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
	$('#page2_jDataGrid1_table').trigger('reloadGrid');
});

$(document).ready(function(){
	page2_jContainer1_obj.resizeAll();
});
