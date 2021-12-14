const express = require('express');
const router = express.Router();

const Telephone = require('../models/Telephone');

/***********telephone**************/
router.get('/', (req, res) => {
    console.log("telephone init");
    Telephone.findOneById(0)
    .then((telephoneData) => {
      if (!telephoneData) return res.status(404).send({ err: 'telephone not found' });
      res.send(telephoneData);
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