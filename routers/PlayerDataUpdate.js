const express = require('express');
const router = express.Router();

// //json parser
// const bodyParser = require("body-parser");
// router.use(express.urlencoded({extended : false}));
// router.use(bodyParser.json());

const Player = require('../models/Player');

/***********Player**************/
router.get('/', (req, res) => {
    console.log("Player init");

    console.log(req.body);

    Player.findOne({"date" : req.body.date, "round" : req.body.round, "email" : req.body.email})
    .then((playerData) => {
      if (!playerData) return res.send(200, 0);
      if(playerData.isExist) return res.send(200, 2);
      
      res.send(200, 1);
      Player.findOneAndUpdate({"date" : req.body.date, "round" : req.body.round, "email" : req.body.email}, {$set: {"isExist" : true}})
      .then((playerData) => {
        if (!playerData) return console.log("error");
        console.log("update isExit");
      })
       .catch(err => console.log("error"));
      })
    .catch(err => res.status(500).send(err));
 });
 
 router.get('/getCurrentScene', (req, res) => {
    console.log("getCurrentScene");

    Player.findOne({"date" : req.body.date, "round" : req.body.round, "email" : req.body.email})
    .then((playerData) => {
      if (!playerData) return res.status(404).send({ err: 'player not found' });
      console.log(playerData.currentScene);
      res.send(playerData.currentScene);
      })
    .catch(err => res.status(500).send(err));
 });

 router.get('/setCurrentScene', (req, res) => {
  console.log("currentScene update");

  Player.findOneAndUpdate({"date" : req.body.date, "round" : req.body.round, "email" : req.body.email}, {$set: {"currentScene" : req.body}})
  .then((playerData) => {
     if (!playerData) return res.status(404).send({ err: 'playerData not found' });
  })
  .catch(err => res.status(500).send(err));
}); 
 
 router.get('/setIsExist', (req, res) => {
  console.log("isExist update");

  Player.findOneAndUpdate({"date" : req.body.date, "round" : req.body.round, "email" : req.body.email}, {$set: {"isExist" : false}})
  .then((playerData) => {
     if (!playerData) return res.status(404).send({ err: 'playerData not found' });
  })
  .catch(err => res.status(500).send(err));
}); 

module.exports = router;