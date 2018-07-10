var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	autoplay: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
})
onload = function () {
	var width = document.body.clientWidth
	if (width < 760) {
		$('.layui-nav').addClass('layui-nav-tree')
		$('.layui-nav-item').addClass('layui-nav-itemed')
	}
	$('.menu').click(function () {
		$('.layui-nav').slideToggle()
	})
	$("body").scroll(function() {
		$('.layui-nav').hide()
	});
    layui.use(['element', 'carousel'], function(){
        var element = layui.element, carousel = layui.carousel
		var height = '480px', height2 = '400px'
		if (width < 1200) {
			height = '420px'
			height2 = '300px'
		}
		if (width < 760) {
			height = '280px'
			height2 = '210px'
		}
        carousel.render({ //动物健康
			elem: '#test2',
			width: '100%' ,
			height: height,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test3',
			width: '100%' ,
			height: height,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({ //社会责任
			elem: '#test4',
			width: '100%' ,
			height: height2,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test5',
			width: '100%' ,
			height: height2,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test6',
			width: '100%' ,
			height: height2,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({ //关于我们
			elem: '#test7',
			width: '100%' ,
			height: height,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
    })
}
window.onresize = function () {
	var width = document.body.clientWidth
	if (width < 760) {
		$('.layui-nav').addClass('layui-nav-tree')
		$('.layui-nav-item').addClass('layui-nav-itemed')
	} else {
		$('.layui-nav').removeClass('layui-nav-tree')
		$('.layui-nav-item').removeClass('layui-nav-itemed')
	}
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