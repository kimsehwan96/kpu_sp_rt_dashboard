import React from 'react';
import { Card,CardContent, CardHeader, Wrapper } from "../DrivingRecord/elements";
import {BlueFont, Title, YellowFont} from "../elements";

const FuelLevel = () => {
    return (
        <Wrapper>
            <Card style={{ marginTop: '15px' }}>
                <CardHeader>
                    <Title>평균 연비</Title>
                </CardHeader>
                <CardContent>
                    <BlueFont
                        style={{ fontSize: "50px", marginRight: '10px' }}
                    >
                        8.4
                    </BlueFont>
                    <BlueFont>
                        km/L
                    </BlueFont>
                </CardContent>
            </Card>
            <Card style={{ marginTop: '15px' }}>
                <CardHeader>
                    <Title>잔여 연료량</Title>
                </CardHeader>
                <CardContent>
                    <YellowFont
                        style={{ fontSize: "50px", marginRight: '10px' }}
                    >
                        50.2
                    </YellowFont>
                    <YellowFont>
                        %
                    </YellowFont>
                </CardContent>
            </Card>
        </Wrapper>
    );
}

export default FuelLevel;