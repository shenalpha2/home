
module.exports = {
  
tableName : "Users",
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

