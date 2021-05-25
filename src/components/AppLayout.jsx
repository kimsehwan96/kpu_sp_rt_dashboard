import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import ThemeToggle from "../theme/ThemeToggle";
import Header from "./Header";

const AppLayout = () => {
    const [ThemeMode, toggleTheme] = useTheme();

    return (
        <Container>
            <Header />
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
        </Container>
    );
}

export default AppLayout;

const Container = styled.div`
  min-height: 100%;
  position: relative;
`;