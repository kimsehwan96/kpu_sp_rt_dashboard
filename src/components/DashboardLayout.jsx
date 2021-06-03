import React from "react";
import styled from "styled-components";

// InfoBox
import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";
import FuelBox from "./InfoBox/FuelBox";
import FuelConsumptionBox from "./InfoBox/FuelConsumptionBox";

// RealtimeChart
import RealtimeChart from '../assets/RealtimeChart';
import { useRealtimeData } from "../context/RealtimeDataProvider";

const DashboardLayout = () => {
    const { speed, RPM } = useRealtimeData();

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
                        title="속도 추이"
                        time={Date.now()}
                        value={speed.value}
                        borderColor="#79BCCD"
                        maxValue={200}
                        minValue={0}
                    />
                </Card>
                <Card>
                    <RealtimeChart
                        title="RPM 추이"
                        time={Date.now()}
                        value={RPM.value}
                        borderColor="#00A363"
                        maxValue={8000}
                        minValue={0}
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
  padding: 10px;
  height: 30vh;
  width: 80vh;
`;