import React, {useState} from 'react';
import { Container, IBWrapper, LGWrapper } from "./elements";
import LineGraph from "./RealTimeChart";
import DrivingRecord from "./DrivingRecord";
import FuelEfficiency from "./FuelEfficiency";
import FuelLevel from "./FuelLevel";
import FuelConsumption from "./FuelConsumption";

const Content = () => {

    return (
      <Container>
          <IBWrapper>
              <DrivingRecord />
              <FuelEfficiency />
              <FuelLevel />
              <FuelConsumption />
          </IBWrapper>
          <LGWrapper>
              {/*<LineGraph />*/}
              {/*<LineGraph />*/}
          </LGWrapper>
      </Container>
    );
}

export default Content;