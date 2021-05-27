import React from "react";
import styled from 'styled-components';
import {useRealtimeData} from "../../context/RealtimeDataProvider";

const DrivingBox = () => {
    const [, , drivingData] = useRealtimeData();

    return (
        <Wrapper>
            { drivingData.map(data => (
                <p key={data.id}>
                    {data.title} : {data.value}
                </p>
            )) }
        </Wrapper>
    );
}

export default DrivingBox;

const Wrapper = styled.div`
  display: flex;
`;