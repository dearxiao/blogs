var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';
var data0

$.ajax({
    type: "get",
    url: url + "api/treasure_year/2019/sh600010",
    success: function (res) {
        console.log(JSON.parse(res))
        data0 = splitData(JSON.parse(res).data)
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 20
            },
            xAxis: {
                type: 'category',
                min: 'dataMin',
                max: 'dataMax',
                data: data0.categoryData,
                scale: true,
                axisLine: {
					show: false,
                    onZero: false
                },
                axisTick: {
                    show: false,
                    interval: 100
                },
                splitLine: {
                    show: false
                },
                splitNumber: 20,
            },
            yAxis: {
                scale: true,
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
                z: 2,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [{
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: '日K',
                    type: 'candlestick',
                    data: data0.values,
                    itemStyle: {
                        normal: {
                            color: upColor,
                            color0: downColor,
                            borderColor: upBorderColor,
                            borderColor0: downBorderColor
                        }
                    },
                },
                {
                    name: 'MA5',
                    type: 'line',
                    symbol: "none",
                    data: calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    symbol: "none",
                    data: calculateMA(10),
                    smooth: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    symbol: "none",
                    data: calculateMA(20),
                    smooth: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    symbol: "none",
                    data: calculateMA(30),
                    smooth: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                },

            ]
        };
        var myChart = echarts.init(document.getElementById('chartK'))
        myChart.setOption(option)
    }
});
// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)

function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
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
        result.push((sum / dayCount).toFixed(2));
    }
    return result;
}