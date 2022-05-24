import { DataTypes } from "sequelize";
import db from "../../../config/db";

const Plans = db.define("plans", {
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
      notEmpty: { msg: "You need to pass a plan name" },
    },
  },
  minute: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { msg: "You need to pass a plan minute" },
    },
  },
});

export default Plans;
