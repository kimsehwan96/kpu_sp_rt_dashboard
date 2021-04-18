import React from 'react';
import { Card, CardContent, CardSubTitle, CardTitle, Wrapper } from "./elements";
import { Payload, Title, Unit } from "../elements";

const FuelConsumption = () => {
    return (
        <Wrapper>
            <Card>
                <CardTitle>
                    <Title>연료 소모량</Title>
                </CardTitle>
                <CardSubTitle>
                    <Unit>누적</Unit>
                </CardSubTitle>
                <CardContent>
                    <Payload>0.0</Payload>
                    <Unit>L</Unit>
                </CardContent>
                <CardSubTitle>
                    <Unit>순간</Unit>
                </CardSubTitle>
                <CardContent>
                    <Payload>1.7</Payload>
                    <Unit>L/h</Unit>
                </CardContent>
            </Card>
        </Wrapper>
    );
}

export default FuelConsumption;