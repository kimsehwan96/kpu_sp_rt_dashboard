import React from "react";
import styled from 'styled-components';
import { commonWrapper } from '../../theme/commonStyles';
import { useRealtimeData } from "../../context/RealtimeDataProvider";
import { useTheme } from "../../context/ThemeProvider";


const DrivingBox = () => {
    const [, , drivingData] = useRealtimeData();
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
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-top: 50px;
  display: flex;
  float: right;
`;

const Payload = styled.div`
  font-size: 18px;
  font-weight: bolder;
  margin-right: 10px;
`;

const Unit = styled.div`
  display: flex;
  align-items: center;
`;