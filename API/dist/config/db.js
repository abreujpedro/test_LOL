"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.PGDATABASE || "plans";
const dbUser = process.env.PGUSER || "root";
const dbHost = process.env.PGHOST || "127.0.0.1";
const dbPassword = process.env.PGPASSWORD || "123";
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    port: 3306,
    host: dbHost,
});
exports.default = sequelize;
