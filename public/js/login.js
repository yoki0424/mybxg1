define(['jquery','cookie'],function($){
	// 实现登录功能
	 $('#login').click(function(){
        // serialize()  jquery方法,用于获取表单的所有数据
        // var a = $('#loginForm').serialize();
          // tc_name=admin&tc_pass=123456
        $.ajax({
            type:'post',
            url:'/api/login',
            data: $('#loginForm').serialize(),
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    // 先保存cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    // 登录成功，跳转到主页面
                    location.href = '/main/index';
                }else{
                    alert('用户名或密码错误');
                }
            }
        })
        return false;
    });
});