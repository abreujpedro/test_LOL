import { Sequelize } from "sequelize";

const dbName = process.env.PGDATABASE || "plans";
const dbUser = process.env.PGUSER || "root";
const dbHost = process.env.PGHOST || "127.0.0.1";
const dbPassword = process.env.PGPASSWORD || "123";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  port: 3306,
  host: dbHost,
});

export default sequelize;
