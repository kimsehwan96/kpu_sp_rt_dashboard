import React from 'react';
import { Wrapper, Card, CardContent, CardHeader } from './elements';
import { Payload, Title, Unit } from '../elements';
import { IconButton } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

const DrivingRecord = () => {
    return (
        <Wrapper>
            <Card>
                <CardHeader>
                    <Title>주행 거리</Title>
                    <IconButton>
                        <InfoIcon style={{ color: 'grey', fontSize: '20px' }}/>
                    </IconButton>
                </CardHeader>
                <CardContent>
                    <Payload>1.6</Payload>
                    <Unit>km</Unit>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Title>주행 시간</Title>
                </CardHeader>
                <CardContent>
                    <Payload>00:03</Payload>
                    <Unit>h</Unit>
                </CardContent>
            </Card>
        </Wrapper>
    );
}

export default DrivingRecord;