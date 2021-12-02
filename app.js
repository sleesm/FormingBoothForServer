const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const path = require('path');
const mqtt = require('mqtt');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');

//json parser
app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json);

const soundSchema = require('./models/Sound');

// mqtt
const client = mqtt.connect("mqtt://broker.mqtt-dashboard.com");  
client.on("connect", ()=>{
    console.log("mqtt connect");
    client.subscribe("tact"); // get tact data.
})

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

//untact (unity)
 app.get("/sound/untact" , async(req, res)=>{
    var id = req.body.id;
    var untactState = req.body.state;

    var tactState = false;
    soundSchema.find(function(err, sound){
        if(err){
            console.log("error" + err);
        }else{
            tactState = sound[id].sign[1];
        }
    });
    
    if(tactState == untactState)
        res.send(200, 1);
    else
        res.send(200, 0);
    
    try{ // Mongoose Model.update를 이용한 updateOne(condition, update first document, err)
        await soundSchema.updateOne( {"id" : id}, {"untact" : untactState}, function(err, docs){
            if(err){
                console.log(err);
            }else{
                console.log("Updated Dosc : ", docs);
            }
        });
   }catch(err){
       console.log(err);
   }
 });

app.listen(3000, (err)=>{
    if(err) 
        return console.log(err);
    else{
        mongoose.connect(process.env.MONGDB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => { //db연결
            if (err) {
                console.log(err);
            } else {
                console.log("connected DB");
            }
        });
    }
});

