import styled from 'styled-components';
import Header from "./Header";
import Content from "./Content";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderLayout = styled(Header)`
`;

export const ContentLayout = styled(Content)`
`;