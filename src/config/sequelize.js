'use strict';
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const options = {
  host: config.database.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,
    // disable the modification of tablenames; By default, sequelize will automatically
    freezeTableName: true,
  },

};

if (env === 'production') {
  options.logging = false;
}

const connection = new Sequelize(config.database.dbName,
  config.database.user,
  config.database.password,
  options);

module.exports = connection;
