define(['jquery','template','util','bootstrap'],function($,template,util){
	// 设置导航菜单栏选中
	util.setMenu('/course/list');
	// 获取课程id
	var csid = util.qs('cs_id');
	// console.log(csid);
	// 查询课时信息
	$.ajax({
		type:'get',
		url:'/api/course/lesson',
		data:{cs_id:csid},
		dataType:'json',
		success:function(data){
			
			// 渲染数据
			var html = template('lessonTpl',data.result);
			$('#lessonInfo').html(html);
			// 处理添加功能
			$('#addBtn').click(function(){
				var html = template('modalTpl',{operate:'添加课时'});
				$('#modalInfo').html(html);
				$('#chapterModal').modal();
			});
			// 处理编辑功能
			$('.editLesson').click(function(){
				$('#chapterModal').modal();
				// 先查询数据
				$.ajax({
					typr:'get',
					url:'/api/course/chapter/edit',
					data:{ct_id:$(this).attr('data-ctid')},
					dataType:'json',
					success:function(data){
						data.result.operate = '编辑课时';
						var html = template('modalTpl',data.result);
						$('#modalInfo').html(html);
						// 显示弹窗
						$('#chapterModal').modal();
					}
				})
			});
		}
	})
});