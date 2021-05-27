import React from "react";
import styled from "styled-components";
import DrivingBox from "./InfoBox/DrivingBox";
const DashboardLayout = () => {

    return (
        <Container>
            <DrivingBox />
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.div`
  display: flex;
`;