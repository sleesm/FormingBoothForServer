const mongoose = require('mongoose');
const soundSchema = mongoose.Schema({
    "id" : Number,
	"name" : String,
	"sign" : {
		"tact" : Boolean,
		"untact" : Boolean
	}
});

module.exports = mongoose.model("soundSchema", soundSchema);