import React from "react";
import styled from 'styled-components';
import {commonCard, commonContent, commonHeader, commonWrapper} from '../../theme/commonStyles';
import {useRealtimeData} from "../../context/RealtimeDataProvider";
import Gauge from "../../assets/Gauge";

const FuelEfficiencyBox = () => {
    const { realtimeFuelEfficiency } = useRealtimeData();
    return (
        <Wrapper>
            <Card>
                <Header>
                    {realtimeFuelEfficiency.title}
                </Header>
                <Content>
                    <Gauge
                        value={realtimeFuelEfficiency.value}
                        units={realtimeFuelEfficiency.unit}
                        min={0}
                        max={100}
                    />
                </Content>
            </Card>
            <Card>
                <Header>
                    유류비
                </Header>
                <Content>
                    계산로직필요!
                </Content>
            </Card>
        </Wrapper>
    );
}

export default FuelEfficiencyBox;

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
  margin-top: 20px;
  margin-right: 10px;
  display: flex;
  float: right;
`;
