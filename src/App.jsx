import React, { useState } from 'react';
import { AppBar, Toolbar, Paper, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import logo from './assets/logo.png';

const App = () => {
    const [dark, setDark] = useState(true);

    console.log(`DarkMode: ${dark}`);

    const handleTheme = () => {
        setDark(prev => !prev);
    }

    const theme = createMuiTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <AppBar>
                    <Toolbar>
                        <img src={logo} alt='logo' style={{ maxWidth: 40 }} />
                        <Button onClick={handleTheme}>Click Me!</Button>
                    </Toolbar>
                </AppBar>
            </Paper>
        </ThemeProvider>
    );
};

export default App;