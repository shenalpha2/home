var express = require('express');
router = express.Router();
var users = require('../controllers/Ventes');
if (users){console.log('ok')};

router.post('/Inscription', vente.create);


module.exports = router;
