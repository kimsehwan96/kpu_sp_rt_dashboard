import React from "react";
import styled from 'styled-components';
import timer from 'react-moment'
import { useTheme } from "../context/ThemeProvider";
import DarkLogo from '../assets/darkLogo.png';
import LightLogo from '../assets/lightLogo.png';

const Header = () => {
    const [ ThemeMode ]  = useTheme();

    console.log(ThemeMode)
    return (
        <Container>
            <Logo src={ ThemeMode === 'dark' ? DarkLogo : LightLogo } />
            <Timer format='MM/DD hh:mm' interval={ 30000 }/>
        </Container>
    );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.img`
  width: 15vh;
  height: 15vh;
`;

const Timer = styled(timer)`
  margin-right: 10px;
`;