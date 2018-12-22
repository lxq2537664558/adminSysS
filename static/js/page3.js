$(document).ready(function(){


    page2_jContainer1_obj=$('#page3_jContainer1_container').layout({
        onresize:function(){
            page2_jContainer2_obj.resizeAll();},
        center__paneSelector:'.page2_jContainer1_center'
        ,north__paneSelector:'.page2_jContainer1_north'
        ,north__size:	124
        ,north__spacing_open:	0
        ,west__paneSelector:'.page2_jContainer1_west'
        ,west__size:	264
        ,maskIframesOnResize: true
    });

    page2_jContainer2_DataGrids=new Array("page2_jDataGrid1","49");
    page2_jContainer2_obj=$('#page3_jContainer2_container').layout({
        onresize:function(){
            Vjjq.resizegrid(page2_jContainer2_DataGrids);},
        center__paneSelector:'.page2_jContainer2_center'
        ,north__paneSelector:'.page2_jContainer2_north'
        ,north__size:	31
        ,north__spacing_open:	0
        ,maskIframesOnResize: true
    });

    var page2_jTreeView1_setting = {
    };
    var page2_jTreeView1_zNodes =[
        { name:'考勤管理', open: true,
            children: [
                { name:'人员管理'},
                { name:'考勤管理'}
            ]}
    ]
    $.fn.zTree.init($('#page3_jTreeView1_ztree'), page2_jTreeView1_setting, page2_jTreeView1_zNodes);
});

jQuery().ready(function(){
    jQuery('#page3_jDataGrid1_table').jqGrid({
        datatype: 'local',
        multiselect: true,
        viewrecords: true,
        colNames:['人员编号','姓名','性别','部门','电话','手机','Email','备注'],
        colModel:[
            {name:'A0',index:'A0', width:93},
            {name:'A1',index:'A1', width:64},
            {name:'A2',index:'A2', width:64},
            {name:'A3',index:'A3', width:94},
            {name:'A4',index:'A4', width:64},
            {name:'A5',index:'A5', width:127},
            {name:'A6',index:'A6', width:130},
            {name:'A7',index:'A7', width:64}
        ],
        width: '100%',
        height: '100%',
        rowNum:20,
        pager: jQuery('#page3_jDataGrid1_pager')
    }).navGrid('#page2_jDataGrid1_pager',{edit:false,add:false,del:false});
    $('#page3_jDataGrid1_table').closest('.ui-jqgrid-bdiv').css({'overflow-y': 'auto'});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',1,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',2,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',3,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',4,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',5,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',6,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',7,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',8,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',9,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',10,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',11,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',12,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',13,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',14,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',15,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',16,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',17,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',18,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').jqGrid('addRowData',19,{A0:'',A1:'',A2:'',A3:'',A4:'',A5:'',A6:'',A7:''});
    $('#page3_jDataGrid1_table').trigger('reloadGrid');
})

$(document).ready(function(){
    page2_jContainer1_obj.resizeAll();
});
