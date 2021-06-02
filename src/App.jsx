import React, { Suspense } from 'react';
import { ThemeProvider } from "./context/ThemeProvider";
import { RealtimeDataProvider } from "./context/RealtimeDataProvider";
import { GlobalStyle } from "./theme/GlobalStyle";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";

// Layout
import AppLayout from "./components/AppLayout";

const App = () => {
    const options = {
        position: positions.TOP_CENTER,
        timeout: 5000,
        offset: '30px',
        transition: transitions.SCALE
    }

    return (
        <ThemeProvider>
            <RealtimeDataProvider>
                <AlertProvider template={AlertTemplate} {...options}>
                    <GlobalStyle />
                    <Suspense fallback={<div>로딩중...</div>}>
                        <AppLayout>
                        </AppLayout>
                    </Suspense>
                </AlertProvider>
            </RealtimeDataProvider>
        </ThemeProvider>
    );
};

export default App;