import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 95%;
  margin: 10px 10px auto;
  border: #519287 solid 1px;
  border-radius: 10px;
`;

export const Card = styled.div`
  color: #fafbfb;
  margin-bottom: 20px;
  padding: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;