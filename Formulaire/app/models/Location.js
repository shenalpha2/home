var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
	nomDuProduit : {type:String, required : true},
	Prix : {type:float, required : true},
	Description : {type:String, required : true},
	//Moyen de paiement : {type:String, required : true} a revoir

});
export.model = mongoose.model('Locations',schema,'location');