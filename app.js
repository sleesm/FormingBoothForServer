const express = require('express');
const app = express();
const path = require('path');
const mqtt = require('mqtt');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');

//json parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// TODO : edit mqtt server url.
// mqtt
const client = mqtt.connect("mqtt://broker.mqtt-dashboard.com");  
client.on("connect", ()=>{
    console.log("mqtt connect");
    client.subscribe("tact"); // get tact data.
})

const soundSchema = require('./models/sound');

client.on("message", async(topic, message)=>{
    var obj = JSON.parse(message);

    try{ // Mongoose Model.update를 이용한 updateOne(condition, update first document, err)
         await soundSchema.updateOne( {"id" : obj.id}, {"tact" : obj.tact}, function(err, docs){
             if(err){
                 console.log(err);
             }else{
                 console.log("Updated Dosc : ", docs);
             }
         });
    }catch(err){
        console.log(err);
    }
})


// server
app.set("port", "3000");
var server = http.createServer(app);
server.listen(3000, (err)=>{
    if(err){
        return console.log(err);
    }else{
        console.log("server ready");
        mongoose.connect(process.env.MONGODB_URL, (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Connected to database successfully");
            }
        });
    }
});