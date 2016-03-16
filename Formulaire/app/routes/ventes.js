var express = require('express');
var router = express.Router();

var vente = require('../controllers/Ventes');
if (vente) {console.log('récupération du controller produit, terminé!')};

router.post('/Inscription', vente.create);


module.exports = router;
