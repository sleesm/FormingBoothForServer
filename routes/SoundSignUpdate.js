const express = require('express');
const router = express.Router();
const {testConnection} = require('./MqttConnection');
const {updateUnitySign} = require('./UnityConnection');

router.get("/untact" , (req, res)=>{ //sound/untact
   // res.send("Hello world");
    console.log("untact in");
    // unity topic update
    // updateUnitySign(res, req);
    testConnection(req, res);
 });
 

 module.exports = router;
