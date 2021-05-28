import React from "react";
import styled from "styled-components";

// InfoBox
import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";
import FuelBox from "./InfoBox/FuelBox";
import FuelConsumptionBox from "./InfoBox/FuelConsumptionBox";
import RealtimeChart from "./RealtimeChart";

const DashboardLayout = () => {

    return (
        <Container>
            <InfoBoxes>
                <DrivingBox />
                <FuelEfficiencyBox />
                <FuelBox />
                <FuelConsumptionBox />
            </InfoBoxes>
            <RealtimeCharts>
                <RealtimeChart
                    width={350}
                    title="속도 추이"
                />
            </RealtimeCharts>
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const InfoBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const RealtimeCharts = styled.div`
  display: flex;
`;