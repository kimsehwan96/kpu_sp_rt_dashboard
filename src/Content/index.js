import React from 'react';
import { Container, IBWrapper, LGWrapper } from "./elements";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";

const Content = () => {
    return (
      <Container>
          <IBWrapper>
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
          </IBWrapper>
          <LGWrapper>
              <LineGraph />
              <LineGraph />
          </LGWrapper>
      </Container>
    );
}

export default Content;