/* jshint indent: 2 */
const sequelize = require("../config/sequelize");
const DataTypes = require("sequelize/lib/data-types");
const Aircraft = require('./aircraftModel');
const Users = sequelize.define(
  "users",
  {
    idUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_user"
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: "",
      field: "email"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
      field: "password"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
      field: "password"
    },
    permissions: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "",
      field: "permissions"
    }
  },
  {
    tableName: "users"
  }
);
Users.belongsTo(Aircraft, {
  as: 'aircrafts',
  sourceKey: 'idUser',
  targetKey: 'idUser',
  foreignKey: 'idUser'
});
module.exports = Users;
