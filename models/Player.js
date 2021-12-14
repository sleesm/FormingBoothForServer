const mongoose = require('mongoose');
const Player = mongoose.Schema({
    "date" : String,
	"round" : Number,
	"email" : String,
	"currentScene" : String,
	"isExist" : Boolean
});

module.exports = mongoose.model("player", Player);