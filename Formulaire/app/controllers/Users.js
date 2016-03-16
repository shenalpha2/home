require('../models/User');
var mongoose = require('mongoose');
var User = mongoose.model('User');


var Users = {
	create: function(req,res){
		console.log(req.body,req);
		var u = new User({
			name:req.body.name,
	firstName:req.body.firstName ,
	email:req.body.email ,
	mdp:req.body.mdp ,
		});
		u.save(function(err){
			if (err)
				throw err;
			console.log('User created');
			console.log (u);

		});
		res.send('thank you for your inscription!')
	}
};
module.exports = Users;
