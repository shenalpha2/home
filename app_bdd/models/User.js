var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
	name: {type:String,required:true},
	firstName: {type:String,required:true},
	email: {type:String,required:true},
	mdp: {type:String,required:true},
	createdOn: {type:Date, default: Date.now},

});
exports.model = mongoose.model('User',schema,'users');