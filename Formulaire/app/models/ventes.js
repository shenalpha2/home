var mongoose = require ('mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	nomDuProduit: {type: String},
	Prix: {type: String},
	Description: {type: String}
	//Moyen de paiement : {type:String, required : true} a revoir

});
exports.model = mongoose.model('Vente',schema,'vente');