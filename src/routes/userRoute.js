const Respuesta = require("../utils/respuesta");
const express = require("express");
const router = express.Router();
const User = require("../service/userService");

//se llama el servicio de usuario ->  login
router.post("/login", (req, res) => {
  let respuesta = new Respuesta();
  User.login(req.body)
    .then(resp => {
      respuesta.data = resp;
      respuesta.toSuccess(resp);
      res.json(respuesta);
    })
    .catch(err => {
      respuesta.toError(err);
      res.json(respuesta);
    });
});

module.exports = router;
