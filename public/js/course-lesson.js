define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单栏选中
	util.setMenu('/course/list');
	// 获取课程id
	var csid = util.qs('cs_id');
	// 查询课时信息
	$.ajax({
		type:'get',
		url:'/api/course/lesson',
		data:{cs_id:csid},
		dataType:'json',
		success:function(data){
			var html = template('lessonTpl',data.result);
			$('#lessonInfo').html(html);
		}
	})
});