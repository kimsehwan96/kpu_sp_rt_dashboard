import { createContext, useState, useEffect, useContext } from "react";
import title from '../libs/dataManager.json';
import io from 'socket.io-client';

const URL = 'http://3.34.87.77:5000/binder'
const socket = io(URL)

const RealtimeDataContext = createContext([]);

const RealtimeDataProvider = ({ children }) => {
    const [ payloads, setPayloads ] = useState([]);

    return (
        <RealtimeDataContext.Provider value={[ payloads, setPayloads ]}>
            {children}
        </RealtimeDataContext.Provider>
    );
};

function useRealtimeData () {
    const context  = useContext(RealtimeDataContext);
    const [payloads, setPayloads] = context;
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(false);

    useEffect(() => {
        socket.on('rtdata', data => {
            const jsonData = JSON.parse(data);
            const result = jsonData.fields.map(
                (field, idx) => Object({
                    id: field,
                    title: title[field],
                    value: jsonData.values[idx]
                }))
            if (result) {
                setPayloads(result);
                setLoading(false);
            } if (!result) {
                setError(true);
            }
        })

        if(loading) return <div>Data Loading...</div>;
        if(error) return <div>Please Check Your Socket Server</div>;
    }, []);

    return [ payloads ];
}

export { RealtimeDataProvider, useRealtimeData }