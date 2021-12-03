const express = require('express');
const router = express.Router();
const {testConnection} = require('./MqttConnection');
const {updateUnitySign} = require('./UnityConnection');

router.get("/untact" , (req, res)=>{ //sound/untact
    // res.send("Hello world");

    // unity topic update
    // updateUnitySign(res, req);
    
    // mqtt topic update
    testConnection(req, res);

 });

 router.get("/telephone" , (req, res)=>{ //telephone
    // DB count +1
    // res.Json(유저 카운트랑 감정 카운트 전체 받아와서 보내주기);
    
    // unity topic update
    // mqtt topic update
    testConnection(req, res);

 });

 router.get("/telephone/update" , (req, res)=>{ //telephone/update
    var nums = req.body;
    // DB nums에 있는 숫자 +1

    // unity topic update  
    // mqtt topic update
    testConnection(req, res);

 });

 module.exports = router;
