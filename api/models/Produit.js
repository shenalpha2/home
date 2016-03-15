
module.exports = {
  
tableName : "Produits",
schema: true,
connection : "someMongodbServer",


  attributes: {
  	name: {
        type: 'string',
        required: true,
    },
        image: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'text',
        required: true,
    }
  }
};

