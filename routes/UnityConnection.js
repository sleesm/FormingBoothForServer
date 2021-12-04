const Sound_obj = require('../models/Sound');


async function updateUnitySign(res, req){
    var id = req.body.id;
    var untactState = req.body.state;

    // var tactState = false;
    // Sound_obj.find(function(err, sound){
    //     if(err){
    //         console.log("error" + err);
    //     }else{
    //         tactState = sound[id].sign[1];
    //     }
    // });

    // if(tactState == untactState)
    //     res.send(200, 1);
    // else
    //     res.send(200, 0);

    // try{ // Mongoose Model.update를 이용한 updateOne(condition, update first document, err)
    //     await Sound_obj.updateOne( {"id" : id}, {"untact" : untactState}, function(err, docs){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("Updated Dosc : ", docs);
    //         }
    //     });
    // }catch(err){
    // console.log(err);
    // }
}

module.exports = {
    updateUnitySign
}