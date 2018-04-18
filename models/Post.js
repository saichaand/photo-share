var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	// to store username all stuff ????
	profile : {
		type : mongoose.Schema.Types.Mixed,
		default : {}
	},
	// image is going to be in cloud -- url is string
	image : {
		type : String,
		default : ''
	},
	caption : {
		type : String,
		default : ''
	},
	timestamp : {type: Date, default : Date.now}
});

module.exports = mongoose.model('PostSchema', PostSchema);