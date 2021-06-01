import React from "react";
import { Liquid } from '@ant-design/charts';

const FuelLiquid = ({ percent, width, height }) => {

    const config = {
        width: width,
        height: height,
        percent: percent,
        shape: 'rect',
        outline: {
            border: 3,
        },
        wave: { length: 158 },
    }

    return <Liquid {...config}/>;
}

export default FuelLiquid;