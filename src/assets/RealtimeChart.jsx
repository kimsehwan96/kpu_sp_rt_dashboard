import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

const RealtimeChart = ({
                           title,
                           maxValue,
                           minValue,
                           time,
                           value,
                           borderColor,
                           backgroundColor
}) => {
    const [ dataArray ] = useState([]);

    const data = {
        labels: [],
        datasets: [{
            label: title,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            lineTension: 0,
            data: dataArray,
        }]
    }

    const options = {
        scales: {
            xAxes: [{
                type: 'realtime',
                realtime: {
                    onRefresh: function (chart) {
                        chart.data.datasets.forEach(function (dataset) {
                            dataset.data.push({
                                x: time,
                                y: value
                            });
                        });
                    },
                    delay: 2000,
                    duration: 60000,
                }
            }],
            yAxes: [{
                ticks: {
                    min: minValue,
                    max: maxValue,
                }
            }]
        }
    }

    return(
        <div>
        <Line
            width={500}
            height={190}
            data={data}
            options={options}
        />
        </div>
    );
}

export default RealtimeChart;