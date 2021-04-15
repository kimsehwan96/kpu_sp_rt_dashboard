import React, { useState } from 'react';
import {Container, HeaderLayout} from "./AppElements";
import Content from "./Content";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <Container>
            <HeaderLayout />
            <Content />
        </Container>
    );
};

export default App;