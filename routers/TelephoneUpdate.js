const express = require('express');
const router = express.Router();

const Telephone = require('../models/Telephone');

/***********telephone**************/
router.get('/', (req, res) => {
    console.log("telephone init");
    var count = 0;

    Telephone.findOneById(0)
    .then((telephoneData) => {
      if (!telephoneData) return res.status(404).send({ err: 'telephone not found' });
      res.send(telephoneData);

      Telephone.findOneAndUpdate({id : 0}, {$set: {"count" : (telephoneData.count + 1)}})
      .then((telephoneData) => {
        if (!telephoneData) return console.log("error");
        console.log("update count");
      })
      .catch(err => console.log("error"));
      })
    .catch(err => res.status(500).send(err));
 });
 

 router.get('/update', (req, res) => {
    console.log("telephone update");
    var nums = req.body;
 
    Telephone.findOneAndUpdate({id : 0}, {$set: {"numbers" : nums}})
    .then((telephoneData) => {
       if (!telephoneData) return res.status(404).send({ err: 'telephone not found' });
    })
    .catch(err => res.status(500).send(err));
 });
 
 
module.exports = router;