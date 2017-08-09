import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts';

// 引入柱状图
/*import  'echarts/lib/chart/bar';
 // 引入提示框和标题组件
 import 'echarts/lib/component/tooltip';
 import 'echarts/lib/component/title';*/

class Home extends React.Component{

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var mainChart = echarts.init(document.getElementById('main'));
        var fangChart = echarts.init(document.getElementById('fang'));
        // 绘制图表
        mainChart.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:[{
                    name: '财务云',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#6af028'
                    }
                },{
                    name: '税务云',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#409aff'
                    }
                },{
                    name: '发票云',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#ef6145'
                    }
                },{
                    name: '金融云',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#30dfff'
                    }
                },{
                    name: '费用云',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#caee3b'
                    }
                },{
                    name: '主数据',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#32f294'
                    }
                },{
                    name: '报表',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#f14872'
                    }
                }],
                left: '3%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['20日','21日','22日','23日','24日','25日','26日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'财务云',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'税务云',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 890, 330, 310]
                },
                {
                    name:'发票云',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 901, 154, 190, 330, 410]
                },
                {
                    name:'金融云',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 101, 620, 1290, 730, 520]
                },
                {
                    name:'费用云',
                    type:'line',
                    stack: '总量',
                    data:[120, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name:'主数据',
                    type:'line',
                    stack: '总量',
                    data:[420, 512, 601, 934, 1290, 1330, 1320]
                },
                {
                    name:'报表',
                    type:'line',
                    stack: '总量',
                    data:[550, 712, 401, 634, 890, 730, 920]
                }
            ],
            backgroundColor: '#252d4e',
            textStyle: {
                color: '#aabbd7'
            },
            color:['#6af028','#409aff', '#ef6145', '#30dfff', '#caee3b','#32f294', '#f14872']
        });
        fangChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {},
            xAxis: [
                {
                    type: 'category',
                    data: ['2016年7月','','9月','','11月','','2017年1月','','3月','','5月',''],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ],
            backgroundColor: '#252d4e',
            textStyle: {
                color: '#aabbd7'
            },
        })
    }

    render(){
        return(
            <div>
                <div className="Login-intro-img">
                    <div className="Login-intro-more">
                        <p>容量趋势图</p>
                        <ul>
                            <li>运行以来</li>
                            <li>近一年</li>
                            <li>近一个月</li>
                            <li className="Login-intro-choose">近七天</li>
                        </ul>
                    </div>
                    <div id="main"></div>
                </div>
                <div className="Login-intro-img">
                    <div className="Login-intro-more">
                        <p>交换趋势分析</p>
                        <ul>
                            <li>运行以来</li>
                            <li>近一年</li>
                            <li>近一个月</li>
                            <li className="Login-intro-choose">近七天</li>
                        </ul>
                    </div>
                    <div id="fang"></div>
                </div>
            </div>
        )
    }

}

export default Home;

