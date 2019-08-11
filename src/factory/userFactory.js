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
 * valida que el correo ya este reg
 */ 
exports.validaExisteUser = where => {      
  return Users.count({
    where: where
  });
};


/**
 *  Crear nuevo usuario
 */
exports.createUser = data => {      
  return Users.create({
    data
  });
};

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
