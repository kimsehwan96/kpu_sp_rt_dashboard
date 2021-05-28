import React from "react";
import styled from "styled-components";

// InfoBox
import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";
import FuelBox from "./InfoBox/FuelBox";

const DashboardLayout = () => {

    return (
        <Container>
            <DrivingBox />
            <FuelEfficiencyBox />
            <FuelBox />
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 10px;
`;