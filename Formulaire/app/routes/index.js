var express = require('express');
var router = express.Router();

// Nous allons récuperer notre controlleur fait précédement
//var vente = require('../controllers/Ventes');
//if (vente) {console.log('récupération du controller produit, terminé!')};

/*GET Récupère la liste des utilisateurs
router.get('/ventelist', Vente.index);*/

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('InscriptionU');
  console.log('La page d\'inscription des produit a été affiché!');
});

router.get('/formVente', function(req, res){
	res.render('formVente');
});

router.get('/vente', function(req, res){
  res.render('connexionU');
  console.log('la page de connexion a été affiché!');
});

//Création d'un nouvel utilisateur Particulier
//action du formulaire Jade
//router.post('/Connexion_User', vente.connect);

module.exports = router;

















