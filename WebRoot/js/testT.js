$(function(){
	$("#mytable").bootstrapTable({
		columns: [{
	        field: 'id',
	        title: 'Item ID'
	    }, {
	        field: 'name',
	        title: 'Item Name'
	    }, {
	        field: 'price',
	        title: 'Item Price'
	    }],
	    data: [{
	        id: 1,
	        name: 'Item 1',
	        price: '$1'
	    }, {
	        id: 3,
	        name: 'Item 2',
	        price: '$2'
	    },{
	        id: 2,
	        name: 'Item 2',
	        price: '$2'
	    }
	    ],
	    striped:true,//隔行变色
	    sortName:"id",
	    pagination:true,//数据条数
	    showRefresh:true,
	    showToggle:true,
	    showPaginationSwitch:true,//数据条数选择框
	    search:true,
	    //pageSize:10
		
	});
})