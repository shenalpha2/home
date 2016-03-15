var express = require('express');
router = express.Router();
var users = require('../controllers/Users');
if (users){console.log('ok')};

router.post('/Inscrition',users.create);

router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../views','index2.html'));
	console.log ("La page d'Inscrition est affichée");
});

module.exports = router;
