//发送请求按钮的点击事件
document.getElementById("login").addEventListener('tap', function() {
	if(network){
		userlogin();
	}else{
		mui.toast("当前网络不给力，请稍后再试");
	}
});

var userlogin = function() {
	//利用RunJS的Echo Ajax功能测试
	var url = 'http://runjs.cn/action/echo/';
	//请求方式，默认为Get；
	var type = methodEl.value;
	//预期服务器范围的数据类型
	var dataType = dataTypeEl.value;
	//发送数据
	var data = {
		name: "mui",
		version: "pre-release",
		author: "chb",
		description: "最接近原生APP体验的高性能前端框架"
	};
	url = url + (dataType === 'html' ? 'text' : dataType);
	respnoseEl.innerHTML = '正在请求中...';
	if (type === 'get') {
		if (dataType === 'json') {
			$.getJSON(url, data, success);
		} else {
			$.get(url, data, success, dataType);
		}
	} else if (type === 'post') {
		$.post(url, data, success, dataType);
	}
};
