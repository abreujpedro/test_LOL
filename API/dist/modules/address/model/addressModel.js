"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../../config/db"));
const Address = db_1.default.define("address", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a Address Name" },
        },
    },
    number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a number" },
        },
    },
    option: {
        type: sequelize_1.DataTypes.STRING,
    },
    district: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a District" },
        },
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a City name" },
        },
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a State" },
        },
    },
    cep: {
        type: sequelize_1.DataTypes.STRING(8),
        allowNull: false,
        validate: {
            notEmpty: { msg: "You need to pass a CEP" },
            len: {
                args: [8, 8],
                msg: "CNPJ needs to has 8 numbers",
            },
        },
    },
    client_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    latitude: {
        type: sequelize_1.DataTypes.STRING,
    },
    longitude: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Address;
