require('../models/ventes');
var mongoose = require('mongoose'),
Vente = mongoose.model('Vente');

var Ventes = {
    
    create: function (req, res) {
        
        //console.log(req.body, req);
        var v = new Vente({
            nomDuProduit: req.body.nomDuProduit,
            Prix: req.body.Prix,
            Description: req.body.Description
        });
        v.save(function (err) {
            if (err) {
                
                throw err;
            }
            console.log('Le produit a été créé');
            console.log(v);
        });
        //res.json(u);
        res.send(req.body);
    }
     
        
};
module.exports = Ventes;