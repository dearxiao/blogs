var url = 'http://192.168.0.107/', session_id
$(function () {
	$('.hint span').on('click', function(){
		$('.shade, .hint').hide()
	})
	$('.hint2 button').on('click', function(){
		$('.shade, .hint2').hide()
	})
	$("form").ajaxForm(function (res) {
		tips(res)
	});
	// 获取验证码
	$('.acquire').on('click', function () {
		var that = this
		second = 119
		if ($(that).text() == '获取') {
			$(that).text('120')
			var countDown = setInterval(function () {
				$(that).text(second)
				second--
				if (second == 1) {
					clearInterval(countDown)
					$(that).text('获取')
				}
			}, 1000)
		}
	})
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
	if (e.error_code == 200) {
		$('.hint img').attr('src', '../images/success.png')
	}
	$('.hint p').text(e.msg)
	$('.hint, .shade').show()
	setTimeout("$('.hint, .shade').hide()", 1500)
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