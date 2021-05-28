import React from "react";
import styled from "styled-components";

import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";

const DashboardLayout = () => {

    return (
        <Container>
            <DrivingBox />
            <FuelEfficiencyBox />
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