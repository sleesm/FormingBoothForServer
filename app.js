const bodyParser = require("body-parser");
const express = require('express');
const app = express();

const Telephone = require('./models/Telephone');

const mongoose = require('mongoose');
require('dotenv/config');

//json parser
app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());

const SoundSignUpdateRouter = require('./routes/SoundSignUpdate');
app.use('/sound', SoundSignUpdateRouter);

const awsIot = require('aws-iot-device-sdk');

// mqtt
let device = new awsIot.device({
    keyPath : "forming.private.key",
    certPath : "forming-certificate.pem.crt",
    caPath : "root-CA.crt",
    clientId : "node_aws_testing",
    host : "a2egxqaxyh0b7v-ats.iot.ap-northeast-2.amazonaws.com"
})

// topic to pub/sub
const onlineTopic = "online";
const offlineTopic = "offline";

function testConnection(req, res){
    console.log("testConnection");

    device.on("connect", ()=>{//(topic, payload)=>{
        console.log("aws iot device connect");
       // console.log(`topic : ${topic}  message : ${payload}`);
       // res.send(`topic : ${topic}  message : ${payload}`);
   
       //subscribe
       device.subscribe(offlineTopic);
       const connectionMsg = {message : "successful connection"};
       device.publish(offlineTopic, JSON.stringify(connectionMsg));
       res.send('topic : ${offlineTopic}  message : successful connection');
   });
}

function untactMQTTConnect(req, res){
    var objectId = req.body.id;
    var state = req.body.state;
    console.log(objectId + ":" + state)

    device.on("connect", ()=>{//(topic, payload)=>{
        console.log("aws iot device connect");
       // console.log(`topic : ${topic}  message : ${payload}`);
       // res.send(`topic : ${topic}  message : ${payload}`);
   
       //subscribe
       device.subscribe(offlineTopic);
       const connectionMsg = {objectId : state};
       device.publish(offlineTopic, JSON.stringify(connectionMsg));
       res.send('topic : ${offlineTopic}  message : successful connection');
   });
}

app.get("/untact" , (req, res)=>{
    console.log("untact in");
     // unity topic update
     // updateUnitySign(res, req);
    testConnection(req, res);
  });

app.get("/online" , (req, res)=>{
    console.log("untact in");
     // unity topic update
     // updateUnitySign(res, req);
    untactMQTTConnect(req, res);
  });


  
//***********telephone**************
app.get('/telephone', (req, res) => {
      console.log("telephone init");
      Telephone.findOneById(0)
      .then((telephoneData) => {
        if (!telephoneData) return res.status(404).send({ err: 'telephone not found' });
        res.send(telephoneData);
      })
      .catch(err => res.status(500).send(err));
  });


app.get('/telephone/update', (req, res) => {
    console.log("telephone update");
    var nums = req.body;

    Telephone.findOneAndUpdate({id : 0}, {$set: {"numbers" : nums}})
    .then((telephoneData) => {
      if (!telephoneData) return res.status(404).send({ err: 'telephone not found' });
    })
    .catch(err => res.status(500).send(err));
});



app.listen(3000, (err)=>{
    if(err) 
        return console.log(err);
    else{
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => { //db연결
            if (err) {
                console.log(err);
            } else {
                console.log("connected DB");
            }
        });
    }
});

