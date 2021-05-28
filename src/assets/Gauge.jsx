import React from 'react';
import { arc } from 'd3-shape';
import { scaleLinear }  from 'd3-scale';
import { format } from 'd3-format';

const Gauge = ({
    value = 20,
    min = 0,
    max=30,
    units,
}) => {
    const backgroundArc = arc()
        .innerRadius(0.65)
        .outerRadius(1)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .cornerRadius(1)
        ()

    const percentScale = scaleLinear()
        .domain([min, max])
        .range([0, 1])
    const percent = percentScale(value)

    const angleScale = scaleLinear()
        .domain([0, 1])
        .range([-Math.PI / 2, Math.PI / 2])
        .clamp(true)
    const angle = angleScale(percent)

    const filledArc = arc()
        .innerRadius(0.65)
        .outerRadius(1)
        .startAngle(-Math.PI / 2)
        .endAngle(angle)
        .cornerRadius(1)
        ()

    const colorScale = scaleLinear()
        .domain([0, 1])
        .range(["green", "red"])

    const gradientSteps = colorScale.ticks(10)
        .map(value => colorScale(value))

    return(
        <div>
            <svg style={{
                overflow: "visible",
            }}
                 width="11em"
                 viewBox={[-1, -1, 2, 1,].join(" ")}>
                <defs>
                    <linearGradient
                        id="Gauge__gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="-1"
                        x2="1"
                        y2="0">
                        {gradientSteps.map((color, index) => (
                            <stop
                                key={color}
                                stopColor={color}
                                offset={`${
                                    index
                                    / (gradientSteps.length - 1)
                                }`}
                            />
                        ))}
                    </linearGradient>
                </defs>
                <path
                    d={backgroundArc}
                    fill="#2c2f34"
                />
                <path
                    d={filledArc}
                    fill="url(#Gauge__gradient)"
                />
            </svg>
            <div style={{
                marginLeft: '1.5em',
                marginTop: "-1em",
                fontSize: "2.5em",
                lineHeight: "1em",
                fontWeight: "500",
                fontFeatureSettings: "'zero', 'tnum' 1",
            }}>
                { format(",")(value) }
            </div>
            {!!units && (
                <div style={{
                    marginLeft: '4.3em',
                    color: "#8b8ba7",
                    lineHeight: "1.3em",
                    fontWeight: "300",
                }}>
                    { units }
                </div>
            )}
        </div>
    );
}

export default Gauge;