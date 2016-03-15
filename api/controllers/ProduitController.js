/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createArticle: function(req, res) {
	    Article.create( { titre: req.param('title'), content:  req.param('content') }, function(err,created){
	    if(!err) {
	        console.log('Article créé : '+created.titre+', ayant pour ID : '+created.id+'.');
	    }
	    else {
	       return err;
	    }
	    });
	},
	getArticle: function(req, res) {
    	Article.find({}, function(err, found){
        			res.view( 'article', {articles: found} );
    		});
}

};

