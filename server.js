const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require("mysql");
/* Configuración principal de la app -----*/
var env = process.env.NODE_ENV || 'development',
  config = require('./src/config/config')[env],
  port = config.server.port,
  hostname = config.server.host;
//middel
const morgan = require("morgan");
const bodyParser = require("body-parser");
/* Middleware - incluir la configuarción de middleware para la app */
app.use(cors());
if (env === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev')); /* Registrar todas las peticiones en consola */
}

app.use(morgan("dev"));
app.use(bodyParser.json());
var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

/* Routes */
app.use(require('./src/routes'));

app.set("port", 3001);
app.listen(app.get("port"), () => {
  console.log("server on");
});

