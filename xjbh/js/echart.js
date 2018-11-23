
//echarts
var myChart = echarts.init(document.getElementById('chart'))
    var Xdata0 = [], Ydata0 = [], Xdata2 = [], Ydata2 = []
option = {
    title: {
        text: '历史价格表',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#fff',
            fontSize: '.4rem'
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#1a5d6c',
            }
        },
        axisLabel :{  
            interval:0,
            rotate:-40, 
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        splitLine: {
            show: true,
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
                color: '#1a5d6c'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#1a5d6c',
            }
        }
    },
    grid: {
        show: true,
        left: 30,
        right: 30,
        top: 30,
        height: 120,
        borderColor: '#1a5d6c',
    },
    series: [{
        data: [1.2, 1.5, 1, 1.9, 2, 2.5, 1.5],
        type: 'line',
        itemStyle: {
            borderColor: '#1a5d6c'
        },
        lineStyle: {
            color: '#1a5d6c'
        },
    }]
}
myChart.setOption(option)