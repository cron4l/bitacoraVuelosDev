"use strict";
const Users = require("../models/userModel");
const Aircraft = require("../models/aircraftModel");
/**para joins incluir debajo de where  
 *  include: [
        {
          model: '',
          as: '',
          attributes: ['',''],
          required: false          
        }        
      ] 
 * 
*/

/**
 * Login
 */ 
exports.login = where => {      
  return Users.findOne({
    where: where
  });
};

/**
 * Recuperar aviones del usuario
 */ 
exports.getAircraftsByUser = user => {  
  return Aircraft.findAll({
    where: {
      id_user : user.idUser,
      deleted:0
    }
  });
};
