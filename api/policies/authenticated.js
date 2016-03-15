
module.exports = function (req, res, ok) {
	

	if (req.session.authenticated) {

		req.session.User = req.user;
		return ok();

	}

	else {
		var requireLoginError = [{name: 'requireLogin', message: 'You must be signed in.'}]
		req.session.flash = {
		err: requireLoginError
		}
		res.redirect('/session/new');
		return;
	}
};