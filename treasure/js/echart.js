$(function () {
	var minute_data, // 分时线数据
		xdata = [], // 时间
		ydata = [], //价格
		ydata2 = [], //涨跌幅百分比
		ydata3 = [], //成交量
		y1_min, y1_max,
		y2_min, y2_max,
		y3_min, y3_max, //3条y轴最大最小值
		option = {
			animation: false,
			grid: {
				left: 0,
				right: 0,
				top: 10,
				bottom: 20
			},
			tooltip: {
				trigger: 'axis',
				showDelay: 10,
				hideDelay: 10,
				transitionDuration: 0.1,
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
				data: xdata,
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
					interval: 100
				},
				splitLine: {
					show: false
				},
				// axisPointer: {
				// 	type: 'shadow'
				// }
			}],
			yAxis: [{
					type: 'value',
					min: 1,
					max: 2,
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
					}
				},
				{
					type: 'value',
					position: 'right',
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
					}
				},
				{
					type: 'value',
					position: 'left',
					// min: 0,
					// max: 10000000,
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
					}
				}
			],
			series: [{
					name: '价格',
					type: 'line',
					data: ydata
				},
				{
					name: '涨跌幅',
					type: 'line',
					yAxisIndex: 1,
					data: ydata2
				},
				{
					name: '成交量',
					type: 'bar',
					yAxisIndex: 2,
					data: ydata3
				}
			]
		};
	minute_k()

	function minute_k() {
		$.ajax({
			type: "get",
			url: url + "api/treasure_minute/sh600010",
			success: function (res) {
				minute_data = JSON.parse(res).data
				// console.log(minute_data)
				for (let i = 0; i < minute_data.length; i++) {
					xdata.push(minute_data[i][0].slice(0, 2) + ':' + minute_data[i][0].slice(2))
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
				// console.log(xdata, ydata, ydata2, ydata3)
				var myChart = echarts.init(document.getElementById('chart1'))
				myChart.setOption(option)
			}
		});
	}
})