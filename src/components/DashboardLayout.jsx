import React from "react";
import styled from "styled-components";

// InfoBox
import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";
import FuelBox from "./InfoBox/FuelBox";
import FuelConsumptionBox from "./InfoBox/FuelConsumptionBox";

const DashboardLayout = () => {

    return (
        <Container>
            <DrivingBox />
            <FuelEfficiencyBox />
            <FuelBox />
            <FuelConsumptionBox />
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