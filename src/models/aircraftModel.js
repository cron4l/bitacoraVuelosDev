/* jshint indent: 2 */
const sequelize = require("../config/sequelize");
const DataTypes = require("sequelize/lib/data-types");
const Aircraft = sequelize.define(
  "aircraft",
  {
    idAircraft: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id_aircraft"
    },
    airplaneImg: {
      type: DataTypes.BLOB,
      allowNull: true,
      defaultValue: "",
      field: "airplane_img"
    },
    aircraftReg: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      field: "aircraft_reg"
    },
    make: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      field: "make"
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      field: "model"
    },
    year: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "year"
    },
    serialNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      field: "serial_number"
    },
    maxFuel: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      field: "max_fuel"
    },
    idUnits: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "id_units"
    },
    idFuel: {
      type: DataTypes.NUMBER,
      allowNull: true,      
      field: "id_fuel"
    },
    idUser: {
      type: DataTypes.NUMBER,
      allowNull: true,      
      field: "id_user"
    }
  },
  {
    tableName: "aircraft"
  }
);
module.exports = Aircraft;
