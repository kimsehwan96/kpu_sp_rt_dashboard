import React, { Suspense } from 'react';
import { ThemeProvider } from "./context/ThemeProvider";
import { GlobalStyle } from "./theme/GlobalStyle";

// Layout
import AppLayout from "./components/AppLayout";

const App = () => {

    return (
        <ThemeProvider>
            <GlobalStyle />
            <Suspense fallback={<div>로딩중...</div>}>
                <AppLayout>
                </AppLayout>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;