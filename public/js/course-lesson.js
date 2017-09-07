define(['jquery','template','util','bootstrap','form'],function($,template,util){
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


			// 表单提交功能
			function submitForm(url,ctid){
				var param = {ct_cs_id:csid};
				if(ctid){
					param.ct_id = ctid;
				}
				$('#submitBtn').click(function(){
					$("#modalForm").ajaxSubmit({
						type:'post',
						url:url,
						data:param,
						dataType:'json',
						success:function(data){
							if(data.code == 200){
								location.reload();
							}
						}

					});
				});
			}


			// 处理添加功能
			$('#addBtn').click(function(){
				// 调用模板
				var html = template('modalTpl',{operate:'添加课时'});
				$('#modalInfo').html(html);
				// 弹出模态框
				$('#chapterModal').modal();

				// 添加提交表单
				submitForm('/api/course/chapter/add');
			});
			// 处理编辑功能
			$('.editLesson').click(function(){
				$('#chapterModal').modal();
				// 先查询数据
				// 
				var ctid = $(this).attr('data-ctid');
				$.ajax({
					typr:'get',
					url:'/api/course/chapter/edit',
					data:{ct_id:ctid},
					dataType:'json',
					success:function(data){
						data.result.operate = '编辑课时';
						var html = template('modalTpl',data.result);
						$('#modalInfo').html(html);
						// 显示弹窗
						$('#chapterModal').modal();

						// 编辑提交表单
						submitForm('/api/course/chapter/modify',ctid);
					}
				})
			});
		}
	})
});