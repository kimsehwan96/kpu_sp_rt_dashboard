import React from 'react';
import Chart from 'react-apexcharts';

const RealtimeChart = ({ width, title }) => {

    const options = {
        chart: {
            id: "realtime",
            type: "line",
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: title,
            align: 'left'
        },
        xaxis: {
            categories: []
        },
        yaxis: {
            max: 250
        },
        legend: {
            show: false
        }
    };

    const series = [
        {
            data: []
        }
    ];

    return (
        <div>
            <Chart
                options={options}
                series={series}
                width={width}
            />
        </div>
    );
}

export default RealtimeChart;