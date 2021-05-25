import React from "react";
import styled from "styled-components";
import { useRealtimeData } from "../context/RealtimeDataProvider";

const DashboardLayout = () => {
    const [ payloads ] = useRealtimeData();

    return (
        <Container>
            <DataWrapper>
                {payloads.map(payload => (<DataOutput key={payload.id}>
                        {payload.title} : {payload.value}
                    </DataOutput>
                ))}
            </DataWrapper>
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.div`
  display: flex;
`;

const DataWrapper = styled.ul`
  display: flex;
`;

const DataOutput = styled.li`
  display: flex;
`;