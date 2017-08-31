define(['jquery','template','bootstrap'],function($,template){
	// 设置导航菜单高亮选中
	$('.nav a[href="'+location.pathname+'"]').addClass('active');
	// 调用后台接口获取列表数据
	$.ajax({
		url: '/api/teacher',
		type: 'get',
		dataType: 'json',
		success:function(data){
			// 解析数据渲染页面
			var html = template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(html);

			// 绑定预览单击事件
			$('.preview').click(function(){
				// 获取当前记录id
				var td = $(this).closest('td');
				var tcId = td.attr('data-tcId');
				// 根据id查询数据
				$.ajax({
					type:'get',
					url:'/api/teacher/view',
					data:{tc_id:tcId},
					dataType:'json',
					success:function(data){
						// 解析数据渲染页面
						var html = template('modalTpl',data.result);
						$('#modalInfo').html(html);
						// 显示弹窗
						$('#teacherModal').modal();
					}
				});
			});
			// 控制启用和注销
			$('.eod').click(function(){
			// 获取当前记录id
			var td = $(this).closest('td');
			var tcId = td.attr('data-tcId');
			var tcStatus = td.attr('data-status');
			// 缓存this
			var that = this;
				$.ajax({
					type:'post',
					url:'/api/teacher/handle',
					data:{
						tc_id:tcId,
						tc_status:tcStatus
					},
					dataType:'json',
					success:function(data){
						if(data.code == 200){
							// 修改当前的状态
							td.attr('data-status',data.result.tc_status);
							// 修改文字信息
							if(data.result.tc_status == 0){
								$(that).html("注 销");
							}else{
								$(that).html("启 用");
							}
						}
					}
				})
			});
		}
	})
	
})