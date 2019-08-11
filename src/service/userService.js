"use strict";
const md5 = require("md5");
const queryFactory = require("../factory");

/**
 * login del usuario
 */
exports.login = async payload => {
  if (!payload.email) throw new Error("El email es requerido");
  if (!payload.password) throw new Error("La contraseña es requerida");
  const where = {
    email: payload.email,
    password: md5(payload.password),
    deleted: 0
  };
  //se valida el usuario y pw
  let user = await queryFactory.users.login(where);
  if (!user) throw new Error("El usuario y/o contraseña son incorrectos.");
  user.dataValues.aircrafts = await queryFactory.users.getAircraftsByUser(user);
  user.dataValues.mensaje = "Bienvenido";
  return user;
};
