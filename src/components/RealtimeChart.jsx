import React, { useEffect } from "react";
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

const RealtimeChart = ({
                           height,
                           width,
                           title,
                           maxValue,
                           minValue,
                           time,
                           value,
                           borderColor,
                           backgroundColor
}) => {

    useEffect(() => {
        setInterval(() => {

        }, 1000)
    }, [])

    const data = {
        labels: [],
        datasets: [{
            label: title,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            lineTension: 0,
            borderDash: [8, 4],
            data: [],
        }]
    }

    const options = {
        scales: {
            xAxes: [{
                type: 'realtime',
                realtime: {
                    onRefresh: function() {
                        data.datasets[0].data.push({
                            x: time,
                            y: value,
                        });
                    },
                    delay: 2000
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
            width={width}
            height={height}
            data={data}
            options={options}
        />
        </div>
    );
}

export default RealtimeChart;