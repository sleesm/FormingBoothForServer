const express = require('express');
const router = express.Router();
const {untactMQTTConnect, tactMqttResult} = require('./MqttConnection');

/***********mqtt**************/
router.get("/untact" , (req, res)=>{ //sound/untact
   console.log("untact in");
   untactMQTTConnect(req,res);
   tactMqttResult(req,res);
});

router.get("/untact/getData" , (req, res)=>{ //sound/untact
   tactMqttResult(req,res);
});

module.exports = router;
