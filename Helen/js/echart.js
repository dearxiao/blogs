
//echarts
var myChart = echarts.init(document.getElementById('chart'))
    var Xdata0 = [], Ydata0 = [], Xdata2 = [], Ydata2 = []
option = {
    title: {
        text: '日K线图',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'monospace'
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#5d402b',
            }
        },
        axisLabel :{  
            interval: 0,
            rotate: -40, 
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1a5d6c',
            }
        }
    },
    yAxis: {
        type: 'value',
        min: '0',
        max: '3',
        axisLine: {
            lineStyle: {
                color: '#5d402b'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1a5d6c',
            }
        }
    },
    grid: {
        // show: true,
        left: 25,
        right: 10,
        top: 30,
        height: 120,
        borderColor: '#1a5d6c',
    },
    series: [{
        data: [1.2, 1.5, 1, 1.9, 2, 2.5, 1.5],
        type: 'line',
        itemStyle: {
            borderColor: '#5d402b'
        },
        lineStyle: {
            color: '#5d402b'
        },
    }]
}
myChart.setOption(option)