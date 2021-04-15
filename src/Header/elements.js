import styled from 'styled-components';
import Moment from 'react-moment';

export const Container = styled.div`
  display: flex;
  height: 12vh;
  justify-content: space-between;
  align-items: center;
  border: white solid 1px;
`;

export const MainWrap = styled.div`
  display: flex;  
  color: #fafbfb;
  align-items: center;
`

export const Logo = styled.img`
  width: 6rem;
  height: 6rem;  
`;

export const SubWrap = styled.div`
  display: flex;
`;

export const StyledMoment = styled(Moment)`
  color: #fafafb;
  margin-right: 20px;
`;