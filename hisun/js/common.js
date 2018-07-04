onload = function () {
	$('.menu').click(function () {
		$('.layui-nav').slideToggle()
	})

    layui.use(['element', 'carousel'], function(){
        var element = layui.element, carousel = layui.carousel
        carousel.render({ //轮播
            elem: '#test1',
            width: '100%' ,
            height: '800px',
        });
        carousel.render({ //动物健康
			elem: '#test2',
			width: '100%' ,
			height: '420px',
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test3',
			width: '100%' ,
			height: '420px',
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({ //社会责任
			elem: '#test4',
			width: '100%' ,
			height: '420px',
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test5',
			width: '100%' ,
			height: '420px',
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({
			elem: '#test6',
			width: '100%' ,
			height: '420px',
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
        carousel.render({ //关于我们
			elem: '#test7',
			width: '100%' ,
			height: '420px',
			autoplay: false,
			arrow: 'always',
			indicator: 'none'
		});
    })
}