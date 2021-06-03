import React, { useEffect } from "react";
import styled from "styled-components";
import {
    commonCard,
    commonContent,
    commonHeader,
    commonPayload,
    commonUnit,
    commonWrapper
} from "../../theme/commonStyles";
import { useRealtimeData } from "../../context/RealtimeDataProvider";
import FuelLiquid from "../../assets/Liquid";

const FuelBox = () => {
    const { ResidualFuel } = useRealtimeData();

    return (
        <Wrapper>
                <Card>
                    <Header>
                        {ResidualFuel.title}
                    </Header>
                    <Content>
                        <FuelLiquid
                            percent={ResidualFuel.value / 100}
                            height={150}
                            width={300}
                        />
                    </Content>
                </Card>
        </Wrapper>
    );
}

export default FuelBox;

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
  ${commonContent};
  color: #79BCCD;
`;

const Payload = styled.div`
  ${commonPayload}
`;

const Unit = styled.div`
  ${commonUnit}
`;