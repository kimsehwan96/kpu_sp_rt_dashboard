import { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';

const URL = 'http://3.34.87.77:5000/binder'
const socket = io(URL)

const RealtimeDataContext = createContext([]);

const RealtimeDataProvider = ({ children }) => {
    const [ payloads, setPayloads ] = useState();

    useEffect(() => {
        socket.on('rtdata', data => {
            const jsonData = JSON.parse(data);
            const result = jsonData.fields.map(
                (field, idx) => Object({
                    id: field,
                    title: dataName[field],
                    value: jsonData.values[idx]
                }))
            setPayloads(result);
        })
    }, [])

    return (
        <RealtimeDataContext.Provider value={ payloads }>
            {children}
        </RealtimeDataContext.Provider>
    );
};

export { RealtimeDataProvider }