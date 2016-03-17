/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// var bcrypt = require('bcrypt');

module.exports = {

 'new': function(req, res) {

 	res.view('session/new');
 },

 create: function(req, res, next) {

 	if (!req.param('email') || !req.param('password')) {

 		var usernamePasswordRequiredError = [{name : 'usernamePasswordRequired', message: 'you must both a user name and password.'}]

 		req.session.flash = {
 			err: usernamePasswordRequiredError
 		}

 		res.redirect('/session/new');
 		return;
 	}

 	User.findOne({email : req.param('email')}, function foundUser (err, user) {
 		if (err) return next(err);

 		if (!user) {

 			var noAccountError = [{name: 'noAccount', message: 'The email Adress' 	+ req.param('email') + 'not found.'}]
 			req.session.flash = {
 				err: noAccountError
 			}
 		res.redirect('/session/new');
 		return;
 		}

 		// bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid) {
 		// 	if (err) return next(err);

 			// if (!valid) {
 			// 	var usernamePasswordMismatchError = [{name : 'usernamePasswordMismatch', message: 'Invalid username and password combination.'}]
 			// 	req.session.flash = {
 			// 		err: usernamePasswordMismatchError
 			// 	}
 			// 	res.redirect('/session/new');
 			// 	return;
 			// }
 			console.log(user)
 			req.session.authenticated = true;
			req.session.User = {};
			req.session.User.id = user.id;
			req.session.User.name = user.name;
			req.session.User.email = user.email;
			req.session.User.num = user.num;
			req.session.User.admin = user.admin;
			req.session.User.adresse = user.adresse;

			if ( req.session.User.admin) {
				res.redirect('/user');
				return;
			}

 			res.redirect('/user/show/' + user.id);

 		// });
 	});
 },

 destroy: function(req, res, next)  {

 	req.session.destroy();
 	res.redirect('/session/new')
 }
		
};

