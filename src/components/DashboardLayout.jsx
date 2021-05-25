import React from "react";
import styled from "styled-components";
import { useRealtimeData } from "../context/RealtimeDataProvider";

const DashboardLayout = () => {
    const payloads = useRealtimeData();

    return (
        <Container>
            <div>
                {payloads.map(payload => <p key={payload.id}>{payload.title}: {payload.value}</p>)}
            </div>
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.div`
  display: flex;
`;