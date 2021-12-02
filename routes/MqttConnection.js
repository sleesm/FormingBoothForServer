const awsIot = require('aws-iot-device-sdk');

// mqtt
let device = new awsIot.device({
    keyPath : "./forming.private.key",
    certPath : "./forming-certificate.pem.crt",
    caPath : "./root-CA.crt",
    clientId : "node_aws_testing",
    host : "a2egxqaxyh0b7v-ats.iot.ap-northeast-2.amazonaws.com"
})

// topic to pub/sub
const onlineTopic = "online";
const offlineTopic = "offline";

async function testConnection(req, res){
    device.on("connect", ()=>{//(topic, payload)=>{
        // console.log("aws iot device connect");
        // console.log(`topic : ${topic}  message : ${payload}`);
        // res.send(`topic : ${topic}  message : ${payload}`);

        //subscribe
        device.subscribe(offlineTopic);
        const connectionMsg = {meessage : "successful connection"};
        device.publish(offlineTopic, JSON.stringify(connectionMsg));
        res.send(`topic : ${offlineTopic}  message : successful connection`);
    });
}

module.exports = {
    testConnection
}