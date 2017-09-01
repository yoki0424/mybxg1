define(['jquery'],function($){
	// 工具函数
	return {
		setMenu:function(path){
			// 设置导航菜单高亮选中
			$('.nav a[href="'+path+'"]').addClass('active');
		},
		// 获取字符串 querystring
		qs:function(key){
			var param = location.search.substring(1);
			var result = null;
			if(param){
				var kvs = param.split('&');
				$.each(kvs,function(i, item) {
					var kv = item.split('=');
					if(kv[0] == key){
						result = kv[1];
						return false; // 终止循环
					}
				});
			}
			return result;
		}
	}
});