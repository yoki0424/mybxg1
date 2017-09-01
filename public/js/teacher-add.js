define(['jquery','template','util'],function($,template,util){
	// 设置菜单选中
	util.setMenu('/teacher/list');
	// 获取讲师编辑的id
	var tcId = util.qs('tc_id');
	if(tcId){
		// 编辑 (根据id调用后台接口获取数据)
		$.ajax({
			type:'get',
			url:'/api/teacher/edit',
			data:{tc_id:tcId},
			dataType:'json',
			success:function(data){
				// 自定义属性
				data.result.operate="编辑讲师";
				// 解析数据渲染页面
				var html = template('teacheraddTpl',data.result);
				$('#teacherInfo').html(html);
				// 提交编辑讲师表单
				submitForm('/api/teacher/update');
			}
		})
	}else{
		// 添加
		var html = template('teacheraddTpl',{operate:'添加讲师',tc_gender:1});
		$('#teacherInfo').html(html);
		// 提交添加讲师表单
		submitForm('/api/teacher/add');
	}

	// 提交表单公共方法
	function submitForm(url){
		$('#teacherBtn').click(function(){
			$.ajax({
				type:'post',
				url:url,
				data:$('#teacherForm').serialize(),
				dataType:'json',
				success:function(data){
					if(data.code == 200){
						location.href = '/teacher/list';
					}
				}

			})
		})
	}
})