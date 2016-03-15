/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createArticle: function (req, res, next) {

		Article.create( req.params.all(), function userCreated (err, user) {

			if (err) {

				//console.log(err);
				req.session.flash = {
					err: err
				}

				return res.redirect('/user/show/'+ user.id);
			}
			req.session.authenticated = true;
 			console.log(user)
 			req.session.authenticated = true;
			req.session.Article = {};
			req.session.Article.id = article.id;
			req.session.Article.name = article.name;
			req.session.Article.description = article.description;
			req.session.Article.image = article.image;

			res.redirect('/user/show/'+ user.id);
		});
	},

	getArticle: function(req, res) {
    	Article.find({}, function(err, found){
        			res.view( 'article', {articles: found} );
    		});
}

};

