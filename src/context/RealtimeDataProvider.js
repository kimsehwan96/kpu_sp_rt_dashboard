import {createContext, useState, useEffect, useContext} from "react";
import title from '../libs/dataTitle.json';
import unit from '../libs/dataUnit.json';
import awsConfig from '../libs/awsConfig.json'
import Amplify, {PubSub} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub/lib/Providers';

function init(awsConfig) {
    Amplify.configure({
        Auth: {
            userPoolId: awsConfig.cognitoUserPoolId,
            userPoolWebClientId: awsConfig.cognitoUserPoolClientId,
            identityPoolId: awsConfig.cognitoIdentityPoolId,
            region: awsConfig.region,
        }
    });

    Amplify.addPluggable(new AWSIoTProvider({
        aws_pubsub_region: awsConfig.region,
        aws_pubsub_endpoint: `wss://${awsConfig.mqttBrokerEndpoint}/mqtt`,
    }));
}

const topic = 'ec2/data' //우리가 임의로 지정 할 수 있는 mqtt subscribe 토픽

const RealtimeDataContext = createContext([]);

const RealtimeDataProvider = ({children}) => {
    init(awsConfig);
    const [payloads, setPayloads] = useState([]);

    return (
        <RealtimeDataContext.Provider value={[payloads, setPayloads]}>
            {children}
        </RealtimeDataContext.Provider>
    );
};

function useRealtimeData() {
    const context = useContext(RealtimeDataContext);
    const [payloads, setPayloads] = context;
    const [temp, setTemp] = useState({});
    const [drivingData, setDrivingData] = useState([]);
    const [fuel, setFuel] = useState([]);
    const [realtimeFuelEfficiency, setRealtimeFuelEfficiency] = useState({});
    const [speed, setSpeed] = useState({});
    const [RPM, setRPM] = useState({});
    const [ResidualFuel, setResidualFuel] = useState({});

    useEffect(() => {
        PubSub.subscribe(topic, {
            provider: 'AWSIoTProvider'
        }).subscribe({
            next: (data) => {
                {
                    console.log(data.value);
                    const jsonData = data.value;
                    const result = jsonData.fields.map(
                        (field, idx) => Object({
                            id: field,
                            title: title[field],
                            value: jsonData.values[idx],
                            unit: unit[field],
                        }))


                    setPayloads(result);

                    function findPayload(title) {
                        for (let i = 0; i < result.length; ++i) {
                            if (result[i].title === title) {
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

                }
            },
            error: (error) => console.error(error)
        })
    }, [setPayloads]);

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

export {RealtimeDataProvider, useRealtimeData}