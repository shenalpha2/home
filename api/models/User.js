/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

tableName : "Users",
schema: true,
connection : "someMongodbServer",

  attributes: {

  	name: {
  		type: 'string',
  		 required: true

  	},
      num: {
      type: 'string',
       required: true

    },

    adresse: {

      type: 'string'
    },

  	email: {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},

    admin: {
      type: 'boolean',
      defaultsTo: false
    },


  	encryptedPassword: {
  		type: 'string'
  	},

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword,
      delete obj._csrf;
      delete obj;

    }

  }//,


  // beforeCreate: function (values, next) {

  //   if (!values.password || values.password != values.confirmation) {
  //     return next({err: ["password doesn't match password confirmation."]});
  //   }

  //   require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
  //     if (err) return next(err);
  //     values.encryptedPassword = encryptedPassword;
  //     //values.online = true;
  //     next();
  //   });
  // }
};

