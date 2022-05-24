import { DataTypes } from "sequelize";
import db from "../../../config/db";

const Prices = db.define("prices", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  ddd_origin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a ddd origin" },
    },
  },
  ddd_tocall: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a ddd to call" },
    },
  },
  price_per_minute: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a price" },
    },
  },
});

export default Prices;
