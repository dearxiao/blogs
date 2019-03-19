var config = {
    animation: false,
    title: {
        show: false
    },
    grid: {
        x: 40,
        x2: 45,
        y: 5,
        y2: 5,
        borderColor: "#eee",
        top: "15",
        left: "8%",
    },
    tooltip: {
        trigger: 'axis',
        borderColor: "#ccc",
        showDelay: 10,
        hideDelay: 10,
        transitionDuration: 0.1,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        textStyle: {
            color: "#666",
            fontSize: 11,
            fontFamily: "微软雅黑"
        },
        padding: 10,
        formatter: function (data) {
            //时间
            var date = new Date(data[0].name - 0);
            var y = date.getFullYear(); //year
            var m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1); //month 
            var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); //day 
            var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); //h
            var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); //m
            var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(); //s
            var price = data[0].data;
            if (price != "-") {
                var dom = y + '年' + m + '月' + d + '日';
                price = parseFloat(price);
                var p = (price - json.y_close).toFixed(2);
                var pr = (p / json.y_close * 100).toFixed(2) + "%";
                dom += "<br/>时间：" + h + ':' + mm + ':' + s;
                dom += "<br/>价格：<span style='color:" + (p > 0 ? "red" : "green") + ";'>" + price.toFixed(2) + "</span>";
                dom += "<br/>涨跌：<span style='color:" + (p > 0 ? "red" : "green") + ";'>" + p + "</span>";
                dom += "<br/>涨跌幅：<span style='color:" + (p > 0 ? "red" : "green") + ";'>" + pr + "</span>";
            } else {
                var dom = b_y + '年' + b_m + '月' + b_d + '日';
                dom += "<br/>时间：-";
                dom += "<br/>价格：-";
                dom += "<br/>涨跌：-";
                dom += "<br/>涨跌幅：-";
            }
            return dom;
        },
        axisPointer: {
            lineStyle: {
                color: '#ccc',
                width: 1,
                type: 'solid'
            }
        }
    },
    legend: {
        show: false,
        data: ['-']
    },
    toolbox: {
        show: false
    },
    calculable: false,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: xdata,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitNumber: 0,
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
            show: true,
            type: 'value',
            position: 'left',
            min: ymin,
            max: ymax,
            boundaryGap: false,
            splitNumber: 4,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: function (data) {
                    return data.toFixed(2);
                },
                textStyle: {
                    color: function (data) {
                        var d = 1 * (+data).toFixed(2);
                        if (d > json.y_close) return '#dd2200';
                        if (d < json.y_close) return '#33aa60';
                        if (json.y_close == "--") return '#c8c8c8';
                        return '#c8c8c8';
                    },

                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ccc'],
                    width: 1,
                    type: 'dashed',
                }
            }
        },
        {
            type: 'value',
            position: 'right',
            min: (ymin - json.y_close) / json.y_close * 100,
            max: (ymax - json.y_close) / json.y_close * 100,
            boundaryGap: false,
            splitLine: {
                lineStyle: {
                    color: '#f1f1f1',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#f1f1f1',
                    width: 0,
                    type: 'solid'
                }
            },
            splitNumber: 4,
            axisLabel: {
                formatter: function (data) {
                    return Math.abs(data).toFixed(2) + "%";
                },
                textStyle: {
                    color: function (data) {
                        if (json.y_close == "--") return '#c8c8c8';
                        var d = 1 * parseFloat(data).toFixed(3);
                        if (d >= 0.001) return '#dd2200';
                        if (d < 0) return '#33aa60';
                        return '#c8c8c8';
                    }
                }
            }
        }
    ],
    series: [{
        name: '-',
        type: 'line',
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                },
                color: "#d5e1f2",
                borderColor: "#3b98d3",
                lineStyle: {
                    width: 1,
                    color: ['#3b98d3']
                },
            }
        },
        data: ydata,
        symbol: "circle",
        symbolSize: 5,
        markLine: {
            symbol: "none",
            clickable: false,
            large: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: ['#F96900'],
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            data: markLineData
        }
    }]
};
var myChart = echarts.init(document.getElementById('chart1'))
myChart.setOption(option)