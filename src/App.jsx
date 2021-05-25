import React, { Suspense } from 'react';
import { ThemeProvider } from "./context/ThemeProvider";
import { RealtimeDataProvider } from "./context/RealtimeDataProvider";
import { GlobalStyle } from "./theme/GlobalStyle";

// Layout
import AppLayout from "./components/AppLayout";

const App = () => {

    return (
        <ThemeProvider>
            <RealtimeDataProvider>
                <GlobalStyle />
                <Suspense fallback={<div>로딩중...</div>}>
                    <AppLayout>
                    </AppLayout>
                </Suspense>
            </RealtimeDataProvider>
        </ThemeProvider>
    );
};

export default App;