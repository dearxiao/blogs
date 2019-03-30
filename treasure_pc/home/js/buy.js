var stockChange = $(".play-area").find(".change-stock");
var historyBox = $(".play-area").find('.search_history');
var cue = $('#search_cue');
var html_default = '<tr class="active"><td>万科A</td><td>000002</td><td>wka</td></tr>';
var stopShare = true;

//选中的股票代码
var codeid = getParameterByName("codeid");
if (codeid == "" || codeid == undefined) {
	var selectedCode = "sh600519";
} else {
	var selectedCode = codeid;
}
console.log(codeid, selectedCode)

//echarts
$('#chartContro').on('click', function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$('#chart').show();
	$('#chartK').hide();
})
$('#chartKContro').on('click', function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$('#chartK').show();
	$('#chart').hide();
})

//获取分时数据
function getTimeLine() {
	var minute_data, // 分时线数据
		ydata = [], //价格
		ydata2 = [], //涨跌幅百分比
		ydata3 = [], //成交量
		myChart = echarts.init(document.getElementById('chart')),
		xdata = ["09:30", "09:31", "09:32", "09:33", "09:34", "09:35", "09:36", "09:37", "09:38", "09:39", "09:40", "09:41", "09:42", "09:43", "09:44", "09:45", "09:46", "09:47", "09:48", "09:49", "09:50", "09:51", "09:52", "09:53", "09:54", "09:55", "09:56", "09:57", "09:58", "09:59", "10:00", "10:01", "10:02", "10:03", "10:04", "10:05", "10:06", "10:07", "10:08", "10:09", "10:10", "10:11", "10:12", "10:13", "10:14", "10:15", "10:16", "10:17", "10:18", "10:19", "10:20", "10:21", "10:22", "10:23", "10:24", "10:25", "10:26", "10:27", "10:28", "10:29", "10:30", "10:31", "10:32", "10:33", "10:34", "10:35", "10:36", "10:37", "10:38", "10:39", "10:40", "10:41", "10:42", "10:43", "10:44", "10:45", "10:46", "10:47", "10:48", "10:49", "10:50", "10:51", "10:52", "10:53", "10:54", "10:55", "10:56", "10:57", "10:58", "10:59", "11:00", "11:01", "11:02", "11:03", "11:04", "11:05", "11:06", "11:07", "11:08", "11:09", "11:10", "11:11", "11:12", "11:13", "11:14", "11:15", "11:16", "11:17", "11:18", "11:19", "11:20", "11:21", "11:22", "11:23", "11:24", "11:25", "11:26", "11:27", "11:28", "11:29", "11:30", "13:00", "13:01", "13:02", "13:03", "13:04", "13:05", "13:06", "13:07", "13:08", "13:09", "13:10", "13:11", "13:12", "13:13", "13:14", "13:15", "13:16", "13:17", "13:18", "13:19", "13:20", "13:21", "13:22", "13:23", "13:24", "13:25", "13:26", "13:27", "13:28", "13:29", "13:30", "13:31", "13:32", "13:33", "13:34", "13:35", "13:36", "13:37", "13:38", "13:39", "13:40", "13:41", "13:42", "13:43", "13:44", "13:45", "13:46", "13:47", "13:48", "13:49", "13:50", "13:51", "13:52", "13:53", "13:54", "13:55", "13:56", "13:57", "13:58", "13:59", "14:00", "14:01", "14:02", "14:03", "14:04", "14:05", "14:06", "14:07", "14:08", "14:09", "14:10", "14:11", "14:12", "14:13", "14:14", "14:15", "14:16", "14:17", "14:18", "14:19", "14:20", "14:21", "14:22", "14:23", "14:24", "14:25", "14:26", "14:27", "14:28", "14:29", "14:30", "14:31", "14:32", "14:33", "14:34", "14:35", "14:36", "14:37", "14:38", "14:39", "14:40", "14:41", "14:42", "14:43", "14:44", "14:45", "14:46", "14:47", "14:48", "14:49", "14:50", "14:51", "14:52", "14:53", "14:54", "14:55", "14:56", "14:57", "14:58", "14:59", "15:00"] // 时间

	$.ajax({
		type: "get",
		url: url + "api/treasure_minute/" + selectedCode,
		success: function (res) {
			console.log('分时', JSON.parse(res))
			var data = JSON.parse(res)
			minute_data = data.data

			for (let i = 0; i < minute_data.length; i++) {
				ydata.push(minute_data[i][1])
			}
			for (let i = 0; i < minute_data.length; i++) {
				var yestclose = data.yestclose
				var scale = ((minute_data[i][2] - yestclose) / yestclose * 100).toFixed(2)
				ydata2.push(scale)
			}
			for (let i = 0; i < minute_data.length; i++) {
				ydata3.push(minute_data[i][3])
			}
			myChart.setOption(option = {
				animation: false,
				grid: {
					left: 10,
					right: 10,
					top: 10,
					bottom: 20
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					},
					textStyle: {
						fontSize: 12
					}
				},
				xAxis: [{
					type: 'category',
					splitNumber: 0,
					data: xdata,
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
						interval: 100
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: ['#ccc'],
							width: 1,
							type: 'dashed'
						}
					}
				}],
				yAxis: [{
						type: 'value',
						min: (ydata.min() * 0.95).toFixed(2),
						max: (ydata.max() * 1.01).toFixed(2),
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						axisLabel: {
							inside: true,
							margin: 2,
						},
						splitLine: {
							show: false
						},
						z: 2
					},
					{
						type: 'value',
						position: 'right',
						min: (ydata2.min() * 1.5).toFixed(2),
						max: (Math.abs(ydata2.max()) * 1.5).toFixed(2),
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						axisLabel: {
							inside: true,
							margin: 2,
						},
						splitLine: {
							show: false
						},
						z: 2
					},
					{
						type: 'value',
						position: 'left',
						min: ydata3.min(),
						max: ydata3.max() * 4,
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						axisLabel: {
							show: false,
							inside: true,
							margin: 2,
						},
						splitLine: {
							show: false
						}
					}
				],
				series: [{
						name: '价格',
						type: 'line',
						symbol: "none",
						data: ydata,
						itemStyle: {
							color: '#c1a575',
						},
						lineStyle: {
							width: 1
						}
					},
					{
						name: '涨跌幅',
						type: 'line',
						symbol: "none",
						yAxisIndex: 1,
						data: ydata2,
						itemStyle: {
							color: '#727272',
						},
						lineStyle: {
							width: 1
						}
					},
					{
						name: '成交量',
						type: 'bar',
						yAxisIndex: 2,
						data: ydata3,
						itemStyle: {
							color: '#14b143',
							// normal: {
							// 	color: '#ef232a',
							// 	color0: '#14b143',
							// 	borderColor: '#ef232a',
							// 	borderColor0: '#14b143'
							// },
						}
					}
				]
			})
		}
	});
}
//今开 昨收
function getStockInfo() {
	$.ajax({
		type: "post",
		url: url + "api/treasure_msg",
		data: {
			treasure_code: selectedCode
		},
		success: function (res) {
			console.log('今开', res)
			if (res.code == 200) {
				var data = res.data[0]
				$('#stockName').text(data.股票名字 + selectedCode);
				$('#stock li:eq(0) .r').text(data.今日开盘价);
				$('#stock li:eq(1) .r').text(data.昨日收盘价);
				$('#stock li:eq(2) .r').text(data.今日最高价);
				$('#stock li:eq(3) .r').text(data.今日最低价);
				$('#stock li:eq(4) .r').text(data.成交的股票数);
				$('#stock li:eq(5) .r').text(data.成交金额);
				$('#stock li:eq(6) .r').text((data.昨日收盘价 * 1.1).toFixed(3));
				$('#stock li:eq(7) .r').text((data.昨日收盘价 * 0.9).toFixed(3));
				$('#stock-price .sell li:eq(4) b').text(data.卖一价)
				$('#stock-price .sell li:eq(3) b').text(data.卖二价)
				$('#stock-price .sell li:eq(2) b').text(data.卖三价)
				$('#stock-price .sell li:eq(1) b').text(data.卖四价)
				$('#stock-price .sell li:eq(0) b').text(data.卖五价)
				$('#stock-price .sell li:eq(4) i').text(data.卖一)
				$('#stock-price .sell li:eq(3) i').text(data.卖二)
				$('#stock-price .sell li:eq(2) i').text(data.卖三)
				$('#stock-price .sell li:eq(1) i').text(data.卖四)
				$('#stock-price .sell li:eq(0) i').text(data.卖五)
				$('#stock-price .buy li:eq(0) b').text(data.买一价)
				$('#stock-price .buy li:eq(1) b').text(data.买二价)
				$('#stock-price .buy li:eq(2) b').text(data.买三价)
				$('#stock-price .buy li:eq(3) b').text(data.买四价)
				$('#stock-price .buy li:eq(4) b').text(data.买五价)
				$('#stock-price .buy li:eq(0) i').text(data.买一)
				$('#stock-price .buy li:eq(1) i').text(data.买二)
				$('#stock-price .buy li:eq(2) i').text(data.买三)
				$('#stock-price .buy li:eq(3) i').text(data.买四)
				$('#stock-price .buy li:eq(4) i').text(data.买五)
			}
		}
	});
}
// 实时价格  每秒请求
function price_s() {
	$.ajax({
		type: "post",
		url: url + "api/get_treasure_msg",
		data: {
			treasure_code: selectedCode
		},
		success: function (res) {
			// console.log('实时价格', res)
			if (res.code == 200) {
				var data = res.data[0]
				var cla = '', rise = ''
				if (data.differ_price > 0) {
					$('.up-arrow-box').show();
					$('.down-arrow-box').hide();
					cla = 'red'
					rise = '+'
				}
				if (data.differ_price < 0) {
					$('.up-arrow-box').hide();
					$('.down-arrow-box').show();
					cla = 'green'
				}
				$('#nowPrice').text(data.price);
				$('input[name=price]').val(data.price);
				$('#num1').text(rise + (data.differ_price).toFixed(2)).addClass(cla);
				$('#num2').text(rise + data.differ_scale + '%').addClass(cla);
			}
		}
	});
}
//初始化页面 获取股票实时数据、分时数据、K线图
function stockInit() {
	//获取股票实时数据
	getStockInfo();
	price_s()
	//获取分时数据
	getTimeLine();
}

$(function () {
	//loading
	$('.loading').show();
	stockInit()
});

var freshTimeInterval = 10 * 1000;
var freshTimes = 0;
//定时器 获取实时数据（最新数据）, 每几秒钟就刷新一次
setInterval(function () {
	if (!isTradingTime() || !stopShare) { // 如果不在交易时间就不必刷新数据
		$('#btn_buy').attr('disabled', true).css({
			'background': '#767679'
		}).html('点买时间9:30-11:30, 13:00-14:55');
		return;
	}
	freshTimes++;
	if (freshTimes > 10) {
		freshTimeInterval = 60 * 1000;
	}
	//获取股票实时数据
	getStockInfo();
	price_s()
}, 2000);

//定时器 获取分时数据
setInterval(function () {
	if (!isTradingTime()) { // 如果不在交易时间就不必刷新数据
		return;
	}
	//获取分时数据
	getTimeLine();
}, 60 * 1000);

function isTradingTime() {
	var date = new Date();
	//判断是不是周末
	var dt = date.getDay();
	if (dt == '6' || dt == '7') {
		return false;
	}
	//判断当前时间是否在9:30-11:30, 13:00-15:00
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	if (h < 10) {
		h = "0" + h;
	}
	if (mi < 10) {
		mi = "0" + mi;
	}
	if (s < 10) {
		s = "0" + s;
	}
	var curTime = h + ":" + mi + ":" + s;
	if (curTime >= "09:30:00" && curTime <= "11:30:00" || curTime >= "13:00:00" && curTime <= "14:55:00") {
		return true;
	}
	return false;
}

function splitData(rawData) {
	var categoryData = [];
	var values = []
	for (var i = 0; i < rawData.length; i++) {
		categoryData.push(rawData[i].splice(0, 1)[0]);
		values.push(rawData[i])
	}
	return {
		categoryData: categoryData.reverse(),
		values: values.reverse()
	};
}

function calculateMA(dayCount) {
	var result = [];
	for (var i = 0, len = data0.values.length; i < len; i++) {
		if (i < dayCount) {
			result.push('-');
			continue;
		}
		var sum = 0;
		for (var j = 0; j < dayCount; j++) {
			sum += data0.values[i - j][1];
		}
		result.push(sum / dayCount);
	}
	return result;
}

//点击刷新按钮
var refreshBtnDisabled = false;
$("#refreshBtn").off().click(function (e) {
	if (refreshBtnDisabled) {
		return;
	}
	refreshBtnDisabled = true;
	stockInit();
	//最多2秒钟点击一次
	setTimeout(function () {
		refreshBtnDisabled = false;
	}, 2000);
});

//金额的点击事件
$("#buy_price_ul > li").click(function (e) {
	var price = parseFloat($(this).html());
	//输入框
	$('#buy_number').val(price).trigger('keyup');
});
// 点买金额变化
function updateMoneyRate() {
	var price = parseFloat($('#buy_number').val());
	if ($('#buy_number').val() == '' || $('#buy_number').val() == '0') {
		price = minAmount
	}
	if (price > maxAmount) {
		$('#buy_number').val(maxAmount + '');
		price = maxAmount;
	}
	//可买入-股，资金利用率-%
	var nowPrice = parseFloat($("#nowPrice").html());
	if (nowPrice == '0') {
		$("#gu").html('-');
		$("#lyl").html('-');
	} else {
		// console.log('amount:'+amount)
		var gu = Math.floor((price * 10000 / nowPrice) / 100) * 100;
		var lyl = (nowPrice * gu / (price * 10000) * 100).toFixed(2) + "%";
		$("#gu").html(gu);
		$("#lyl").html(lyl);
	}
}

$(function () {
	$("#stop-loss_ul > li:eq(0)").click();
});

$("#stop-loss_ul > li").click(function (e) {
	var index = $(this).index();
	var buy_price = parseFloat($('#buy_number').val());
	if ($('#buy_number').val() == '' || $('#buy_number').val() == '0') {
		buy_price = minAmount;
	}
	if (buy_price > maxAmount) {
		$('#buy_number').val(maxAmount + '');
		buy_price = maxAmount;
	}
	$(this).addClass("active").siblings("li").removeClass("active");
	var p = parseInt($(this).html());
	var ly_arr = rateArr;
	var ly = -parseInt(parseInt(buy_price * 10000 / ly_arr[index]) * stopLossRate);
	$("#guaranteeFee").html(ly);

	$("#check-surplus_ul>li").html(parseInt(buy_price * 10000 * stopSurplusRate));
	//触发止损
	$("#stop-loss_ul > li ").each(function (i, o) {
		//var stop_loss = parseInt( buy_price * 10000 / ly_arr[i] ) * stopLossRate;
		var stop_loss = parseInt(buy_price * 10000 / ly_arr[i]);
		stop_loss = parseInt(stop_loss);
		$(o).html(stop_loss);
	});
	if (buy_price < 1) {
		$("#publicFee").html(parseInt(dealFee + delayFee * buy_price * 2));
	} else {
		$("#publicFee").html(parseInt(buy_price * publicFee));
	}
	$("#delay_fee").html(parseInt(buy_price * delayFee));

	var delay_line = parseInt($("#stop-loss_ul > li.active").html() * delayLineRate);
	$("#delay_line").html(Math.abs(delay_line));

});

//"点买"按钮
$("#btn_buy").click(function (e) {
	var agree_val = $('input[name="agree_pro"]:checked').val()
	if (!agree_val) {
		tool.popup_err_msg("请阅读并签署谋略协议");
		return;
	}
	updateStockNumber();
})
$("#popup-buy .js-close-popup").click(function (e) {
	$("#popup-buy").hide();
	$("#popBg").hide();
});

//点买弹出层的确定按钮
$("#popup-confirm-btn").click(function (e) {
	var params = {};
	var dealAmount = parseFloat($('#buy_number').val());
	if ($('#buy_number').val() == '' || $('#buy_number').val() == '0') {
		dealAmount = minAmount
	}
	params['stockCode'] = selectedCode;
	params['dealAmount'] = dealAmount;
	params['surplus'] = parseInt($("#check-surplus_ul > li.active").html());
	params['loss'] = parseInt($("#guaranteeFee").html());
	params['publicFee'] = parseInt($("#publicFee").html());
	params['guaranteeFee'] = parseInt($("#stop-loss_ul > li.active").html());
	params['delayLine'] = parseInt($("#delay_line").html());
	params['delayFee'] = parseInt($("#delay_fee").html());
	$.post("api/buy", params, function (data) {
		if (data.code == '0') {
			tool.popup_err_msg("交易成功");
			location.href = "";
		} else {
			tool.popup_err_msg(data.msg);
			$('#popBg').hide()
		}
	}, 'json');
});

//根据股票实时价格 更新弹出层的交易数量
function updateStockNumber() {
	$("#t_stock_name").html($("#stockName").html());
	var t_principal = parseFloat($('#buy_number').val());
	if ($('#buy_number').val() == '' || $('#buy_number').val() == '0') {
		t_principal = minAmount
	}
	$("#t_principal").html(t_principal + "万元");

	var nowPrice = parseFloat($("#nowPrice").html());
	var amount = t_principal;
	$("#t_shou").html(parseInt(amount * 10000 / nowPrice / 100) + "手");
}


//失去焦点时控制范围
$("#buy_number").blur(function () {
	var nub = $("#buy_number").val();
	if (nub == "") {
		$("#buy_number").val(minAmount + '');
	} else if (nub < minAmount) {
		$("#buy_number").val(minAmount + '');
	} else if (nub > maxAmount) {
		$("#buy_number").val(maxAmount + "");

	}
});
//按键抬起时判断值来触发按钮
$("#buy_number").off('keyup').on('keyup', function () {
	var price = parseFloat($('#buy_number').val());
	if ($("#buy_number").val() == '' || $('#buy_number').val() == '0') {
		price = minAmount
	}
	if (price > maxAmount) {
		$("#buy_number").val(maxAmount + '');
		price = maxAmount;
	}
	//金额高亮
	$.each($('#buy_price_ul > li'), function (i, e) {
		if (parseFloat($(e).html()) == price) {
			$(e).addClass("active").siblings("li").removeClass("active");
			return false;
		}
		$('#buy_price_ul > li').removeClass("active");
	})
	//	console.log(amount);
	$("#check-surplus_ul>li").html(parseInt(price * 10000 * stopSurplusRate));
	if (price < 1) {
		$("#publicFee").html(parseInt(dealFee + delayFee * price * 2));
	} else {
		$("#publicFee").html(parseInt(price * publicFee));
	}
	$("#delay_fee").html(parseInt(price * delayFee));
	$("#stop-loss_ul > li:eq(0)").click();
	//更新资金利用率数据
	updateMoneyRate();

})