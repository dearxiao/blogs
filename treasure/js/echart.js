Array.prototype.max = function () {
	return Math.max.apply({}, this)
}
Array.prototype.min = function () {
	return Math.min.apply({}, this)
}
setInterval(function () {
	minute_k()
}, 1000 * 60)

function minute_k() {
	var minute_data, // 分时线数据
		xdata = [], // 时间
		ydata = [], //价格
		ydata2 = [], //涨跌幅百分比
		ydata3 = [], //成交量
		myChart = echarts.init(document.getElementById('chart1'))

	$.ajax({
		type: "get",
		url: url + "api/treasure_minute/"+code,
		success: function (res) {
			console.log(JSON.parse(res))
			var data = JSON.parse(res)
			minute_data = data.data
			for (let i = 0; i < minute_data.length; i++) {
				xdata.push(minute_data[i][0].slice(0, 2) + ':' + minute_data[i][0].slice(2))
			}
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
			// console.log(xdata, ydata, ydata2, ydata3)
			// console.log(ydata2)
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
						max: (Math.abs(ydata2.max())*1.5).toFixed(2),
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