import React from "react";
import styled from "styled-components";

const ThemeToggle = ({ toggle, mode }) => {
    return (
        <ToggleWrapper onClick={toggle} mode={mode}>
            { mode === 'dark' ? '🌚' : '🌝' }
        </ToggleWrapper>
    );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  top: 2%;
  right: 15%;

  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
`;