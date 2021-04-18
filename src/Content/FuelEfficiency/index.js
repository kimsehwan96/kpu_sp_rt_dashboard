import React from 'react';
import {Card, CardContent, CardHeader, Wrapper} from "./elements";
import {BlueFont, Payload, RedFont, Title} from "../elements";
import Gauge from "./Gauge";

const FuelEfficiency = () => {
    return (
        <Wrapper>
            <Card>
                <CardHeader>
                    <Title>순간 연비</Title>
                </CardHeader>
                <CardContent>
                    <Gauge
                        units="km/L"
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Title>유류비</Title>
                    <RedFont>1,150</RedFont>
                    <BlueFont>₩/L</BlueFont>
                </CardHeader>
                <CardContent>
                    <Payload
                        style={{ fontSize: '30px', marginTop: '20px' }}>
                        53
                    </Payload>
                </CardContent>
            </Card>
        </Wrapper>
    );
}

export default FuelEfficiency;