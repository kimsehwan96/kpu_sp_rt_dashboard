import { createContext, useState, useEffect, useContext } from "react";
import title from '../libs/dataTitle.json';
import unit from '../libs/dataUnit.json';
import io from 'socket.io-client';

const URL = process.env.REACT_APP_SOCKET_URL;
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
    const [temp, setTemp] = useState({});
    const [drivingData, setDrivingData] = useState([]);
    const [fuel, setFuel] = useState([]);
    const [realtimeFuelEfficiency, setRealtimeFuelEfficiency] = useState({});
    const [speed, setSpeed] = useState({});
    const [RPM, setRPM] = useState({});
    const [ResidualFuel, setResidualFuel] = useState({});

    useEffect(() => {
        socket.on('rtdata', data => {
            const jsonData = JSON.parse(data);
            const result = jsonData.fields.map(
                (field, idx) => Object({
                    id: field,
                    title: title[field],
                    value: jsonData.values[idx],
                    unit: unit[field],
                }))


            setPayloads(result);

            function findPayload(title) {
                for(let i = 0; i<result.length; ++i) {
                    if(result[i].title === title) {
                        return result[i];
                    }
                }
            }

            setTemp(findPayload('외부 공기 온도'));
            setDrivingData([findPayload('주행 거리'), findPayload('운행 시간')]);
            setFuel([findPayload('평균 연비'), findPayload('잔여 연료량')]);
            setRealtimeFuelEfficiency(findPayload('순간 연비'));
            setSpeed(findPayload('속도'));
            setRPM(findPayload('엔진 rpm'));
            setResidualFuel(findPayload('잔여 연료량'));

        })


    }, [ setPayloads ]);

    return {
        payloads,
        temp,
        drivingData,
        fuel,
        realtimeFuelEfficiency,
        speed,
        RPM,
        ResidualFuel,
    };
}

export { RealtimeDataProvider, useRealtimeData }