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
        var banner = carousel.render({ //轮播
            elem: '#test1',
            width: '100%',
            height: '500px',
		});
		var height = '480px'
		if (width < 1200) {
			banner.reload({
				height: '360px',
			})
			height = '420px'
		}
		if (width < 760) {
			banner.reload({
				height: '230px',
			})
			height = '280px'
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
			height: height,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test5',
			width: '100%' ,
			height: height,
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test6',
			width: '100%' ,
			height: height,
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