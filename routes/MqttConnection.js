const awsIot = require('aws-iot-device-sdk');

let device = new awsIot.device({
    keyPath : "routes/data/forming.private.key",//"forming.private.key",
    certPath : "routes/data/forming-certificate.pem.crt",
    caPath : "routes/data/root-CA.crt",
    clientId : "node_aws_testing",
    host : "a2egxqaxyh0b7v-ats.iot.ap-northeast-2.amazonaws.com"
})

// topic to pub/sub
const onlineTopic = "online";
const offlineTopic = "offline";

offline = [0, 0, 0];

async function settingMqtt(req,res){
    device.on('connect', () => console.log("connection"));
    device.on('close', (err) => err && console.log(err));
    device.on('reconnect', () => { });
    device.on('offlinet', () => { });
    device.on('error', (error) => error && console.log(error));

    device.subscribe(offlineTopic);
    device.on('message', (topic, payload) => {
        console.log(payload.toString());
        payload = JSON.parse(payload.toString());
        switch (topic) {
            case 'online':
                console.log(`Received online, Device react to ${payload}`);
                break;
            case 'offline':
                console.log(`Received offline, Device react to ${payload}`);
                if(payload.sign == 1){
                    offline[payload.thing] = 1;
                }else{
                    offline[payload.thing] = 0;
                }
                break;
        }
    });
}

function tactMqttResult(req, res){
    var objectId = req.body.id;
    res.send(`${offline[objectId]}`);
}

function untactMQTTConnect(req, res){
    var objectId = req.body.id;
    var state = req.body.state;

    console.log(objectId + ":" + state)
    const connectionMsg = {objectId : state};
    device.publish(onlineTopic, JSON.stringify(connectionMsg));
}

module.exports = {
    settingMqtt,
    tactMqttResult,
    untactMQTTConnect
}