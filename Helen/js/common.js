$(function () {
	// 关闭弹窗
	$('.close').click(function () {
		$('.window, .shade').hide()
	})
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
})

function hint(res) {
	if (res) {
		$('.lose').attr('src', 'images/success.png')
	}
	$('.hint').show()
	$('.hint p').text(res.msg)
}

//获取url问号后边的参数
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}