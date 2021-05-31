import { createContext, useState, useContext, useCallback } from 'react';
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider as StyledProvider } from 'styled-components';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    const LocalTheme = window.localStorage.getItem('theme') || 'dark';
    const [ThemeMode, setThemeMode] = useState(LocalTheme);
    const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
            <StyledProvider theme={themeObject}>
                { children }
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);
    const { ThemeMode, setThemeMode } = context;

    const toggleTheme = useCallback(() => {
        if (ThemeMode === 'dark') {
            setThemeMode('light');
            window.localStorage.setItem('theme', 'light');
        }
        else {
            setThemeMode('dark');
            window.localStorage.setItem('theme', 'dark');
        };
    }, [ ThemeMode, setThemeMode ]);

    return [ ThemeMode, toggleTheme ];
}

export { ThemeProvider, useTheme };