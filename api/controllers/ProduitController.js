/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new': function ( req, res) {
		res.view();
	},

	create: function(req, res) {

	    Produit.create( { name: req.param('name'), description:  req.param('description'), image:  req.param('image'), prix:  req.param('prix') }, function(err,created){
	    if(!err) {
	        console.log('produit créé : '+created.name+', ayant pour ID : '+created.id+'.');
			return res.redirect('/produit/index/'+ created.id);
				    
			
	    }		        		
	
	    else {
	       return err;
	    }
	    });
	},
	show: function (req, res, next){
		console.log(req.session)
		Produit.findOne(req.param('id'), function foundProduit (err, user) {
			if (err) return next(err); 
			if (!produit) return next();
			res.view({
				produit: produit
		});
	});
  },

 index: function (req, res, next) {


 	Produit.find(function foundProduits (err, produits) {
 		if (err) return next(err);

 		res.view({
 			produits: produits
 		});

	  });
	}


}