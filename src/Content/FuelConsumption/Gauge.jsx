import React from 'react';
import { arc } from 'd3-shape';

const Gauge = ({
    value = 50,
    min = 0,
    max=30,
    label,
    units,
}) => {
    const backgroundArc = arc()
        .innerRadius(0.65)
        .outerRadius(1)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .cornerRadius(1)
        ()

    return(
        <div>
            <svg style={{overflow: "visible"}}
                 width="9em"
                 viewBox={[
                     -1, -1,
                     2, 1,
                 ].join(" ")}>
                <path
                    d={backgroundArc}
                    fill="#dbdbe7"
                />
            </svg>
        </div>
    );
}

export default Gauge;