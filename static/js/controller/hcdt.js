define('controller/hcdt',['lib/jquery','lib/highcharts','lib/highcharts-zh_CN','lib/exporting','lib/common'], function ($,Highcharts) {

        var chart = Highcharts.chart('container', {
            credits: {
                enabled: false // 禁用版权信息
            },
            chart: {
                type: 'spline'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['10-23', '10-24', '10-25', '10-26', '10-27', '10-28','10-29', '10-30', '10-31', '11-1', '11-2', '11-3','11-4','11-5']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            // xAxis: {
            //     type: 'datetime',
            // },
            // yAxis: {
            //     title: {
            //         text: ''
            //     },
            //     min: 0,
            //     minorGridLineWidth: 0,
            //     gridLineWidth: 0,
            //     alternateGridColor: null,
            //     plotBands: [{ // Light air
            //         from: 0.3,
            //         to: 1.5,
            //         color: 'rgba(68, 170, 213, 0.1)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }, { // Light breeze
            //         from: 1.5,
            //         to: 3.3,
            //         color: 'rgba(0, 0, 0, 0)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }, { // Gentle breeze
            //         from: 3.3,
            //         to: 5.5,
            //         color: 'rgba(68, 170, 213, 0.1)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }, { // Moderate breeze
            //         from: 5.5,
            //         to: 8,
            //         color: 'rgba(0, 0, 0, 0)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }, { // Fresh breeze
            //         from: 8,
            //         to: 11,
            //         color: 'rgba(68, 170, 213, 0.1)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }, { // Strong breeze
            //         from: 11,
            //         to: 14,
            //         color: 'rgba(0, 0, 0, 0)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }, { // High wind
            //         from: 14,
            //         to: 15,
            //         color: 'rgba(68, 170, 213, 0.1)',
            //         label: {
            //             text: '',
            //             style: {
            //                 color: '#606060'
            //             }
            //         }
            //     }]
            // },
            tooltip: {
                valueSuffix: ' m/s'
            },
            plotOptions: {
                spline: {

                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
                    // pointInterval: 3600000*12, // one hour
                    // pointStart: Date.UTC(2018, 9, 10, 0, 0, 0)
                }


            },
            series: [{
                name: 'AIS',
                data: [ 1.7, 0.7, 2.9,5.0,2.6, 0.6, 1.2, 3.2, 0.4, 0.3, 0.5,  2.0, 0.9,0.4],
                color:'RGBA(93, 120, 167, 1)',
                lineWidth: 4,

            },{
                name: 'asas',
                data: [0.0, 0.6, 1.2, 1.7, 0.7, 2.9,3.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4],
                color:'RGBA(93, 167, 138, 1)',
                lineWidth: 4,
            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
        var chart = Highcharts.chart('container1', {
        credits: {
            enabled: false // 禁用版权信息
        },
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [{ // Light air
                from: 0.3,
                to: 1.5,
                color: 'rgba(68,170,213,0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Light breeze
                from: 1.5,
                to: 3.3,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Gentle breeze
                from: 3.3,
                to: 5.5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Moderate breeze
                from: 5.5,
                to: 8,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Fresh breeze
                from: 8,
                to: 11,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Strong breeze
                from: 11,
                to: 14,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // High wind
                from: 14,
                to: 15,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }]
        },
        tooltip: {
            valueSuffix: ' m/s'
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000*12, // one hour
                pointStart: Date.UTC(2018, 9, 10, 0, 0, 0)
            }
        },
        series: [{
            name: '风浪',
            data: [
                0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
        var chart = Highcharts.chart('container2', {
        credits: {
            enabled: false // 禁用版权信息
        },
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [{ // Light air
                from: 0.3,
                to: 1.5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Light breeze
                from: 1.5,
                to: 3.3,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Gentle breeze
                from: 3.3,
                to: 5.5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Moderate breeze
                from: 5.5,
                to: 8,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Fresh breeze
                from: 8,
                to: 11,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Strong breeze
                from: 11,
                to: 14,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // High wind
                from: 14,
                to: 15,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '',
                    style: {
                        color: '#606060'
                    }
                }
            }]
        },
        tooltip: {
            valueSuffix: ' m/s'
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000*12, // one hour
                pointStart: Date.UTC(2018, 9, 10, 0, 0, 0)
            }
        },
        series: [{
            name: 'AIS',
            data: [
                0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
});