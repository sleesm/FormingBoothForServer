const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const server = express();

server.use(bodyParser.json);
server.use(express.urlencoded({extended : false}));
const soundSchema = require("./models/soundSchema");
var soundData = new soundSchema();

require("dotenv").config({ path: "variables.env" });

server.get("/sound/tact" , (req, res)=>{

    var id = req.body.id;
    var name = req.body.name;
    var tactState = req.body.state;
    console.log(id + ":" + state);

    var untactState = false;
    soundData.find(function(err, sound){
        if(err){
            console.log("error" + err);
        }else{
            untactState = sound[id].sign[1];
        }
    });
    
    if(state == untactState)
    {
        res.json({interaction : true});
        //걍 택트 언택트 말고 id로 해서 유니티 -> 아두이노 플레이 정보 / 아두이노 -> 유니티 플레이 정보 접근하는게 낫나 흠
    }
    soundDBUpdate(id, name, tactState, untactState);

 });


 server.get("/sound/untact" , (req, res)=>{

    var id = req.body.id;
    var name = req.body.name;
    var untactState = req.body.state;
    console.log(id + ":" + state);

    var tactState = false;
    soundData.find(function(err, sound){
        if(err){
            console.log("error" + err);
        }else{
            tactState = sound[id].sign[1];
        }
    });
    
    if(state == untactState)
    {
        res.json({interaction : true});

    }
    soundDBUpdate(id, name, tactState, untactState);
 });

function soundDBUpdate(id, name, tactState, untactState){
    const sound = new soundSchema();
    sound.id = parseInt(id);
    sound.name = name;
    sound.sign = new sign(tactState, untactState);

    sound
      .update()
      .then((data)=>{
            console.log(data);
            res.json({
                  message : "update Successfully"
            });
      })
      .catch((err)=>{
          res.json({
               message : "update Unsuccessfully"
         });
     });  
};

server.listen(3000, (err)=>{
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


