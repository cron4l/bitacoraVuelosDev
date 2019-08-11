const express = require('express');
const router = express.Router();
/**
 * HOME del app
 * muestra el template de index de la carpeta views
 */
router.get('/', (req, res) => {
    res.render('index'); 
  });


//rutas para las peticiones
router.use("/api/user", require("./userRoute"));
module.exports = router;