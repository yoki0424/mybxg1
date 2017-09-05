 require.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery',
		cookie:'jquery-cookie/jquery.cookie',
		template:'artTemplate/template-web',
		bootstrap:'bootstrap/js/bootstrap.min',
		datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
		language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		form:'jquery-form/jquery.form',
		validate:'validate/jquery-validate.min',
		uploadify:'uploadify/jquery.uploadify.min',
		region:'jquery-region/jquery.region',
		ckeditor:'ckeditor/ckeditor',
		nprogress:'nprogress/nprogress',
		common:'../js/common',
		login:'../js/login',
		index:'../js/index',
		util:'../js/util',
		teacherlist:'../js/teacher-list',
		teacheradd:'../js/teacher-add',
		settings:'../js/settings',
		state:'../js/state',
		courseadd:'../js/course-add',
		courselist:'../js/course-list'
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		},
		language:{
			deps:['jquery','datepicker']

		},
		validate:{
			deps:['jquery']
		},
		uploadify:{
			deps:['jquery']
		},
		ckeditor:{
			exports:'CKEDITOR'
		}
	}
}) 