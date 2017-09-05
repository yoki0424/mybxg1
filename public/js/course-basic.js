define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('/course/add');
	// 获取课程ID
	var csid = util.qs('cs_id');
	// 获取编辑和添加的标识位
	var flag = util.qs('flag');
	console.log(csid);
	// 根据id调用接口查询课程详细信息
	$.ajax({
		type:'get',
		url:'/api/course/basic',
		data:{cs_id:csid},
		dataType:'json',
		success:function(data){
			if(flag){
				// 编辑
				data.result.operate = '课程编辑';
			}else{
				// 添加
				data.result.operate = '课程添加';
			}

			// 解析数据渲染页面
			var html = template('basicTpl',data.result);
			$('#basicInfo').html(html);
		}
	})
})