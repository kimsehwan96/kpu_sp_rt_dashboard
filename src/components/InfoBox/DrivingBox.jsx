import React from "react";
import styled from 'styled-components';
import {
    commonCard,
    commonContent,
    commonHeader,
    commonPayload,
    commonUnit,
    commonWrapper
} from '../../theme/commonStyles';
import { useRealtimeData } from "../../context/RealtimeDataProvider";
import { useTheme } from "../../context/ThemeProvider";


const DrivingBox = () => {
    const { drivingData } = useRealtimeData();
    const [ ThemeMode ] = useTheme();

    return (
        <Wrapper>
            { drivingData.map(data => (
                <Card key={data.id}>
                    <Header>{data.title}</Header>
                    <Content>
                        <Payload
                            styles={{ color: ThemeMode === 'dark' ? '#fff' : '#1f1f1f' }}
                        >{data.value}</Payload>
                        <Unit>{data.unit}</Unit>
                    </Content>
                </Card>
            )) }
        </Wrapper>
    );
}

export default DrivingBox;

const Wrapper = styled.div`
  ${commonWrapper}
`;

const Card = styled.div`
  ${commonCard}
`;

const Header = styled.div`
  ${commonHeader}
`;

const Content = styled.div`
  ${commonContent}
`;

const Payload = styled.div`
  ${commonPayload}
`;

const Unit = styled.div`
  ${commonUnit}
`;