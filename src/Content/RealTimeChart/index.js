import React from 'react';
import {Container} from "./elements";
import ReactApexChart from 'react-apexcharts';

const RealTimeChart = () => {
    let lastData = 0;
    let data = [];
    let TICKINTERVAL = 86400000
    let XAXISRANGE = 777600000

    return (
        <Container>
            <ReactApexChart
                type='line'
                hegiht={200}
            />
        </Container>
    );
}

export default RealTimeChart;