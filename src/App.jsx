import React, { useEffect } from 'react';
import {Container, ContentLayout, HeaderLayout} from "./elements";
import io from 'socket.io-client';

const App = () => {
    const socket = io('http://3.34.87.77:5000/binder');

    useEffect(() => {
        socket.on('rtdata', data => console.log(data));
    }, [])

    return (
        <Container>
            <HeaderLayout />
            <ContentLayout />
        </Container>
    );
};

export default App;