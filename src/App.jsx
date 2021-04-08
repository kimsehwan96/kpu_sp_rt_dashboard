import React, { useEffect } from 'react';
import { PageHeader, Avatar, Image } from 'antd';
import logo from './assets/logo.jpeg';
import 'antd/dist/antd.css';

export default function App() {
    useEffect(() => {

    }, [])
    return (
        <PageHeader
            className="app-header"
            title="Driving Mate"
            subTitle="realtime-dashboard"
            avatar={<Avatar><Image src={logo} /></Avatar>}
        />
    )
}