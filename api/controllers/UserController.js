/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new': function ( req, res) {
		res.view();
	},

	create: function (req, res, next) {

		User.create( req.params.all(), function userCreated (err, user) {

			if (err) {

				//console.log(err);
				req.session.flash = {
					err: err
				}

				return res.redirect('/user/new');
			}
			req.session.authenticated = true;
 			console.log(user)
 			req.session.authenticated = true;
			req.session.User = {};
			req.session.User.id = user.id;
			req.session.User.name = user.name;
			req.session.User.admin = user.admin;
			req.session.User.adresse = user.adresse;
			res.redirect('/user/show/'+ user.id);
		});
	},


	show: function (req, res, next){
		console.log(req.session)
		User.findOne(req.param('id'), function foundUser (err, user) {
			if (err) return next(err); 
			if (!user) return next();
			res.view({
				user: user
		});
	});
  },

 index: function (req, res, next) {

/* 	console.log(new Date());
 	console.log(req.session.authentificated);

 	*/
 	User.find(function foundUsers (err, users) {
 		if (err) return next(err);

 		res.view({
 			users: users
 		});

	  });
	},

	edit: function (req, res, next) {
		User.findOne(req.param('id'), function foundUser (err, user) {
			if (err)return next(err);
			if(!user) return next('User doesn\'t exist.');

			res.view({
				user: user
			});
		});
	},

		update: function (req, res, next) {
		  var data = {
		     name: req.param("name"),
		     test: req.param("test"),
		     adresse: req.param("adresse"),
		     email: req.param("email"),
		     admin: req.param("admin") ? true : false,
		  };
		  console.log(data);
		  console.log(req.params.all());
		  User.update(req.param('id'), data, function userUpdated (err) {
		   if (err) {
		    return res.redirect('/user/edit/' + req.param('id'));
		   }
		   res.redirect('/user/show/' + req.param('id'));
		  });
		},

	destroy: function (req, res, next) {

		User.findOne(req.param('id'), function foundUser (err, user) {
			if (err) return next(err);

			if (!user) return next('User doesn\'t exist.');

			User.destroy(req.param('id'), function userDestroyed(err) {
				if (err) return next(err);
			});

			res.redirect('/user');

	});

	}



};