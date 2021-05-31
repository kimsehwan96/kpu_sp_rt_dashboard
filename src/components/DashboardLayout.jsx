import React, { useState } from "react";
import styled from "styled-components";

// InfoBox
import DrivingBox from "./InfoBox/DrivingBox";
import FuelEfficiencyBox from "./InfoBox/FuelEfficiencyBox";
import FuelBox from "./InfoBox/FuelBox";
import FuelConsumptionBox from "./InfoBox/FuelConsumptionBox";

// RealtimeChart
import RealtimeChart from './RealtimeChart';
import {useRealtimeData} from "../context/RealtimeDataProvider";

const DashboardLayout = () => {
    const { speed } = useRealtimeData();

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
                        width={700}
                        height={350}
                        title="속도 추이"
                        time={Date.now()}
                        value={speed.value}
                        borderColor="#79BCCD"
                        maxValue={250}
                        minValue={0}
                    />
                </Card>
                <Card>
                    <RealtimeChart
                        width={300}
                        height={300}
                        title="RPM 추이"
                        borderColor="#79BCCD"
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