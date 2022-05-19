"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../../config/db"));
const Client = db_1.default.define("client", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cnpj: {
        type: sequelize_1.DataTypes.STRING(14),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "You need to pass a CNPJ" },
            len: {
                args: [14, 14],
                msg: "CNPJ needs to has 14 numbers",
            },
        },
    },
    corporate_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a Coporate Name" },
        },
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a Name" },
        },
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a Phone number" },
        },
    },
});
exports.default = Client;
