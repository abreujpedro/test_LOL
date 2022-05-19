import { DataTypes } from "sequelize";
import db from "../../../config/db";

const Address = db.define( "address", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a Address Name" },
    },
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a number" },
    },
  },
  option: {
    type: DataTypes.STRING,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a District" },
    },
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a City name" },
    },
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a State" },
    },
  },
  cep: {
    type: DataTypes.STRING( 8 ),
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a CEP" },
      len: {
        args: [ 8, 8 ],
        msg: "CNPJ needs to has 8 numbers",
      },
    },
  },
  client_id: {
    type: DataTypes.INTEGER
  },
  latitude: {
    type: DataTypes.STRING,
  },
  longitude: {
    type: DataTypes.STRING,
  },
} );

export default Address;
