const express = require('express');
const app = express();
const path = require('path');
const mqtt = require('mqtt');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv/config');


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