const mongoose = require('mongoose');
const Telephone = mongoose.Schema({
	"id" : Number,
    "count" : Number,
	"numbers" :
	{
		"0" : Number,
		"1" : Number,
		"2" : Number,
		"3" : Number,
		"4" : Number,
		"5" : Number,
		"6" : Number,
		"7" : Number,
		"8" : Number,
		"9" : Number
	}
});


Telephone.statics.findOneById = function (id) {
	return this.findOne({ id });
  };

Telephone.statics.updateCount = function (id, count) {
	return this.findByIdAndUpdate({ id }, count);
  };


  
module.exports = mongoose.model("telephone", Telephone);