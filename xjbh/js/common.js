
var url = 'http://ticket.zyhlove.com/'
var session_id = localStorage.getItem('session_id')

$(function () {
	$('.shade').on('click', function(){
		$('.shade, .hint, .consult, #feedback, .information').hide()
	})
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