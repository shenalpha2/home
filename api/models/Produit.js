
module.exports = {
  
tableName : "Produits",
schema: true,
connection : "someMongodbServer",


  attributes: {
  	name: {
        type: 'string',
        required: true,
    },
        adresse: {
        type: 'string',
        required: true,
    },
        prix: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'text',
        required: true,
    },
      categorie: {
        type: 'text',
        required: true,
    },
    user: {
        type: 'text',
        required: true,
    },
        usid: {
        type: 'string',
        required: true,
    },
            usod: {
        type: 'string',
        required: true,
    }
    
    

  }
};

