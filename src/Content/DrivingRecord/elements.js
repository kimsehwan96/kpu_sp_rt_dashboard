import styled from 'styled-components';

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
  margin-left: 10px;
  padding: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  float: right;
  margin-top: 20px;
  align-items: center;
`;