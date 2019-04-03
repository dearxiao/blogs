var url = 'http://www.36xye0.com/',
// var url = 'http://192.168.0.108/',
	session_id = localStorage.getItem('session_id')
$(function () {
	$('.hint span').on('click', function(){
		$('.shade, .hint').hide()
	})
	$('.hint2 button').on('click', function(){
		$('.shade, .hint2').hide()
	})
	$("form").ajaxForm(function (res) {
		console.log(res)
		tips(res)
	});
	// 选项卡
	$('.title span').click(function () {
		var i = $(this).index()
		$(this).siblings('span').removeClass('act');
		$(this).addClass('act');
		$('.tab').hide();
		$('.tab' + i + '').show();
	});
})
function tips (e) {
	if (e.code == 202) {
		location.href = 'index.html'
	}
	if (e.code == 200) {
		$('.hint img').attr('src', 'images/success.png')
	}
	$('.hint p').text(e.msg)
	$('.hint, .shade').show()
	setTimeout("$('.hint, .shade').hide()", 1500)
}
// 网络错误
function error() {
	tips({msg: '网络错误'})
    setTimeout(function () {
        location.href = 'login.html'
    }, 2000)
}
//获取url问号后边的参数
function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}