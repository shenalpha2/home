var geocoderProvider = 'google';
var httpAdapter = 'http';
// optionnal 

var extra = {
   // apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier 
    formatter: 'gpx'  ,    // 'gpx', 'string', ...
};

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
 
// Using callback 
/*
geocoder.geocode('29 champs elysée paris', function(err, res) {
    console.log(res);
});
 */
 
 
// Or using Promise 
/*
geocoder.geocode('29 champs elysée paris')
    .then(function(res) {
        console.log(res);
    })
    .catch(function(err) {
        console.log(err);
    });
 */
// output : 
/*
[{
    latitude: 48.8698679,
    longitude: 2.3072976,
    country: 'France',
    countryCode: 'FR',
    city: 'Paris',
    zipcode: '75008',
    streetName: 'Champs-Élysées',
    streetNumber: '29',
    administrativeLevels:
     { level1long: 'Île-de-France',
       level1short: 'IDF',
       level2long: 'Paris',
       level2short: '75' 
	 }
}]
*/

/*
var adress = '29 champs elysée paris';

geocoder.geocode(adress, function(err, res) {
    var GeoPoint = require('geopoint');
	var champsElysees = new GeoPoint(48.8698679, 2.3072976);
	var bastille = new GeoPoint(48.8530778, 2.3695501);
	var chatelet = new GeoPoint(48.8586927, 2.3473009);
	console.log("distance de champsElysees a chatelet : " + chatelet.distanceTo(champsElysees, true) + " km")
	console.log(res);
});
*/
/*
//adresse récupérée de la base de données
var adress = '29 champs elysée paris';

//toute la gestion des coordonnées géographiques s'effectuera ici
geocoder.geocode(adress, function(err, res) {
    var GeoPoint = require('geopoint');
	var chatelet = new GeoPoint(48.8586927, 2.3473009);
	res = res.split(':');
	var champsElysees = new GeoPoint(parseFloat(res[0]), parseFloat(res[1]));
	console.log("lat : " + parseFloat(res[0]) + "              lon: " + parseFloat(res[1]))
	console.log("distance de champsElysees a chatelet : " + chatelet.distanceTo(champsElysees, true) + " km")
});


*/

//adresse récupérée de la base de données
var adresseClient = '29 champs elysée paris';
var adresseVendeurs = ['2 champs elysée paris','68 champs elysée paris'];

//toute la gestion des coordonnées géographiques s'effectuera ici
geocoder.geocode(adresseClient, function(err, res) {
	
	//declaration de geopoint
	var GeoPoint = require('geopoint');
	
	//récuperation des coordonnées du client
	res = res.split(':');
	var coordonneesClient = new GeoPoint(parseFloat(res[0]), parseFloat(res[1]));
	
	//récupération des coordonnées des vendeurs
	var coordonneesVendeurs = [];
	var i = 0;
	for (i=0;i<adresseVendeurs.length;i++) {
		geocoder.geocode(adresseVendeurs[i], function(err2, res2) {
			res2 = res2.split(':');
			coordonneesVendeurs[i] = new GeoPoint(parseFloat(res2[0]), parseFloat(res2[1]));
			i++;
		});
	}
	//calcul des distances entre client et vendeurs et affichage
	setTimeout(function() {
	for (i=0;i<(coordonneesVendeurs.length/2)+1;i++) {
		coordonneesVendeurs.shift();
	}
	console.log((coordonneesVendeurs.length));
    for (i=0;i<coordonneesVendeurs.length;i++) {
		console.log("distance entre le client et le vendeur " + i + " : " + coordonneesClient.distanceTo(coordonneesVendeurs[i], true) + " km");
	}
	}, 4000);
});






