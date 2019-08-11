"use strict";
const md5 = require("md5");
const queryFactory = require("../factory");

/**
 * registrar nuevo usuario
 */
exports.registrar = async payload => {
  if (!payload.email) throw new Error("El email es requerido");
  const dataIn = {
    email: payload.email,
    deleted: 0
  };
  //se valida que no exista el usuario
  let existe = await queryFactory.users.login(where);
  if (!existe || existe == 0) throw new Error("El email ingresado ya esta registrado.");
  const insert = {
    email: payload.email,
    password: payload.password
  }
  let user = await queryFactory.users.createUser(insert);
  return user;
};

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