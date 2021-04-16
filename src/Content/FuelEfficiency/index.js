import React from 'react';
import {Card, CardContent, CardHeader, Wrapper} from "./elements";
import {Title} from "../elements";
import Gauge from "../FuelConsumption/Gauge";

const FuelEfficiency = () => {
    return (
        <Wrapper>
            <Card>
                <CardHeader>
                    <Title>순간 연비</Title>
                </CardHeader>
                <CardContent>
                    <Gauge label="gauge" units="km/L" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Title>유류비</Title>
                </CardHeader>
                <CardContent>
                </CardContent>
            </Card>
        </Wrapper>
    );
}

export default FuelEfficiency;