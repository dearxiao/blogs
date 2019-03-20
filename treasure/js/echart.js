$(function () {
	var minute_data, // 分时线数据
		xdata = [], // 时间
		ydata = [], //价格
		ydata2 = [], //成交量
		ydata3 = [] //涨跌幅百分比

	minute_k()
	function minute_k() {
		$.ajax({
			type: "get",
			url: url + "api/treasure_minute/sh600010",
			success: function (res) {
				minute_data = JSON.parse(res).data
				console.log(minute_data)
				for (let i = 0; i < minute_data.length; i++) {
					xdata.push(minute_data[i][0])
				}
				for (let i = 0; i < minute_data.length; i++) {
					ydata.push(minute_data[i][1])
				}
				for (let i = 0; i < minute_data.length; i++) {
					ydata2.push(minute_data[i][2])
				}
				for (let i = 0; i < minute_data.length; i++) {
					ydata3.push(minute_data[i][3])
				}
				
				console.log(xdata, ydata, ydata2, ydata3)
			}
		});
	}

	option = {
		grid: {
			left: 20,
			right: 20,
			top: 0,
			bottom: 30
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		xAxis: [{
			type: 'category',
			data: xdata,
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisPointer: {
				type: 'shadow'
			}
		}],
		yAxis: [{
				type: 'value',
				name: '水量',
				min: 0,
				max: 250,
				interval: 50,
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				axisLabel: {
					formatter: '{value} ml'
				}
			},
			{
				type: 'value',
				name: '温度',
				min: 0,
				max: 25,
				interval: 5,
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				axisLabel: {
					formatter: '{value} °C'
				}
			}
		],
		series: [{
				name: '蒸发量',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name: '降水量',
				type: 'bar',
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			},
			{
				name: '平均温度',
				type: 'line',
				yAxisIndex: 1,
				data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
	};

	var myChart = echarts.init(document.getElementById('chart1'))
	myChart.setOption(option)
})