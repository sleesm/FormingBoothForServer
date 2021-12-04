const mongoose = require('mongoose');
const Sound_obj = mongoose.Schema({
    "id" : Number,
	"name" : String,
	"sign" : {
		"tact" : Boolean,
		"untact" : Boolean
	}
});

module.exports = mongoose.model("Sound_obj", Sound_obj);