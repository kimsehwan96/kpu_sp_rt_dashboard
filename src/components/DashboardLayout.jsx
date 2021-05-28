import React from "react";
import styled from "styled-components";

// InfoBox
import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";
import FuelBox from "./InfoBox/FuelBox";
import FuelConsumptionBox from "./InfoBox/FuelConsumptionBox";

// RealtimeChart
import RealtimeChart from "./RealtimeChart";

const DashboardLayout = () => {

    return (
        <Container>
            <InfoBoxWrap>
                <DrivingBox />
                <FuelEfficiencyBox />
                <FuelBox />
                <FuelConsumptionBox />
            </InfoBoxWrap>
            <RealtimeChartWrap>
                <Card>
                    <RealtimeChart
                        width={350}
                        title="속도 추이"
                    />
                </Card>
                <Card>
                    <RealtimeChart
                        width={350}
                        title="RPM 추이"
                    />
                </Card>
            </RealtimeChartWrap>
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const InfoBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const RealtimeChartWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  border: 1px solid #ADD7CF;
  border-radius: 15px;
  height: 30vh;
  width: 82vh;
`;