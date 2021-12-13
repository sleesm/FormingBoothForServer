const bodyParser = require("body-parser");
const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

//json parser
app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());

const SoundSignUpdateRouter = require('./routes/SoundSignUpdate');
const Telephone = require('./routes/TelephoneUpdate')
app.use('/sound', SoundSignUpdateRouter);
app.use('/telephone', Telephone);

const {settingMqtt} = require('./routes/MqttConnection');

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
        settingMqtt();
    }
});
