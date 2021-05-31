import React from "react";
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

const FuelBox = () => {
    const { fuel } = useRealtimeData();

    return (
        <Wrapper>
            {fuel.map(data =>
                <Card key={data.id}>
                    <Header>
                        {data.title}
                    </Header>
                    <Content>
                        <Payload>
                            {data.value}
                        </Payload>
                        <Unit>
                            {data.unit}
                        </Unit>
                    </Content>
                </Card>
            )}
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