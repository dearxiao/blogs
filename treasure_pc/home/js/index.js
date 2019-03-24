//banner-swiper

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch (er) {}
	}

	var config = $.cookie = function (key, value, options) {
		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires,
					t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}
			value = config.json ? JSON.stringify(value) : String(value);
			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}
		return result;
	};
	config.defaults = {};
	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, {
				expires: -1
			}));
			return true;
		}
		return false;
	};

	// 清空cookies
	$.clearCookie = function () {
		var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = parts.shift();
			$.cookie(name, '');
		}
	}

}));
//index_login
var index_login = {
	/**
	 * 初始化
	 */
	init: function () {
		this.eventsBind();
	},
	/**
	 * 事件绑定
	 */
	eventsBind: function () {
		var base = this;
		//点击登录按钮
		$('.btn_login').on('click', function () {
			base.indexLogin()
		});
		//回车键
		$('.login_main').on('keyup', function (e) {
			if (e.keyCode == '13') {
				base.indexLogin()
			}
		});

		//判断有无数据
		if ($('#asset-details-tbl thead>tr').length == 1) {
			$('section.moneydetails').append('<div class="data-empty"><div class="data-empty">暂无数据</div></div>')
		}

		//切换资金
		$("#money-flow > li > a").click(function () {
			$(this).addClass("active").parent().siblings().find("a").removeClass("active");
		});

		//切换时间
		$("#search-times").change(function () {
			var times = $(this).val();
		});
	},
	/**
	 * 首页登录
	 */
	indexLogin: function () {
		var base = this;
		$('#err1').hide();
		$('#err2').hide();
		if ($('#username').val().length == 0) {
			$('#err1').show();
			return;
		}

		if ($('#password').val().length == 0) {
			$('#err2').show();
			return;
		}
		$.ajax({
			url: url + 'api/do_login',
			data: {
				phone: $("#username").val(),
				password: $("#password").val(),
			},
			type: 'post',
			dataType: 'json',
			success: function (data) {
				if (data == null) {
					return
				};
				if (data.code != 200) {
					tool.popup_err_msg(data.msg);
					return;
				} else {
					tool.popup_err_msg("登录成功");
					location.href = "ucenter/index.html";
				}
			}
		})
	},
}
//轮播图
$.ajax({
	type: "get",
	url: url+"api/get_banner",
	success: function (res) {
		if (res.code == 200) {
			for (let i = 0; i < res.data.length; i++) {
				var banner = "<img src="+url+"" + res.data[i] + ">"
				$('.carousel_banner_list').append(banner);
			}
		}
	}
});
//初始化
$(function () {
	var ci = 0;
	var timer;
	var set_t = {
		fadein: 400,
		fandout: 600,
		t: 6000
	}
	$('.carousel_pointer li').first().addClass("c_active");
	$(".carousel_banner_list").children().eq(0).fadeIn(0).siblings().fadeOut(0);

	//点击下一张
	function car_next() {
		ci++;
		if (ci == $(".carousel_banner_list a").length) {
			ci = 0;
			$(".carousel_banner_list").children().eq(ci).stop().fadeIn(set_t.fadein).siblings().fadeOut(set_t.fadeout);
			$(".carousel_pointer li").eq(ci).addClass("c_active").siblings().removeClass("c_active")
		} else {
			$(".carousel_banner_list").children().eq(ci).stop().fadeIn(set_t.fadein).siblings().fadeOut(set_t.fadeout);
			$(".carousel_pointer li").eq(ci).addClass("c_active").siblings().removeClass("c_active")
		}
	}

	function car_prev() {
		ci--;
		if (ci == -1) {
			ci = $(".carousel_banner_list a").length - 1;
			$(".carousel_banner_list").children().eq(ci).stop().fadeIn(set_t.fadein).siblings().fadeOut(set_t.fadeout);
			$(".carousel_pointer li").eq(ci).addClass("c_active").siblings().removeClass("c_active")
		} else {
			$(".carousel_banner_list").children().eq(ci).stop().fadeIn(set_t.fadein).siblings().fadeOut(set_t.fadeout);
			$(".carousel_pointer li").eq(ci).addClass("c_active").siblings().removeClass("c_active")
		}
	}

	$('.car_next').click(function () {
		car_next();
	});
	//点击调用
	$('.car_prev').click(function () {
		car_prev();
	});

	$('.carousel_pointer li').mouseover(function () {
		var _index = $(this).index();
		ci = _index;
		$(".carousel_banner_list").children().eq(ci).stop().fadeIn(set_t.fadein).siblings().fadeOut(set_t.fadeout);
		$(".carousel_pointer li").eq(ci).addClass("c_active").siblings().removeClass("c_active")
	})
	timer = setInterval(function () {
		car_next();
	}, set_t.t);
	$(".carousel_banner").hover(function () {
		$('.carousel_btn').show();
		clearInterval(timer);
	}, function () {
		$('.carousel_btn').hide();
		timer = setInterval(function () {
			car_next();
		}, set_t.t);
	})
	//newswiper初始化
	var swiper = new Swiper('.bannerSwiper', {
		direction: 'vertical',
		slidesPerView: 1,
		mousewheel: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var dt = new Date();
	var nowdt = dt.toLocaleDateString();
	if ($.cookie("pop-show-flag") == undefined || $.cookie("pop-show-flag") != nowdt) {
		$("#popup-eve-show").show();
		$.cookie("pop-show-flag", nowdt, {
			expires: 7
		});
	}
	$("#close-show-eve").on("click", function () {
		$("#popup-eve-show").hide();
	});
	$("#close-show-eve2").on("click", function () {
		$("#popup-eve-show").hide();
	});
	//old初始化
	index_login.init();
})