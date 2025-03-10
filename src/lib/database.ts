import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const db = process.env.DATABASE_NAME || "flint";
const user = process.env.DATABASE_USERNAME || "root";
const secret = process.env.DATABASE_SECRET;
const host = process.env.DATABASE_HOST || "localhost";

const sequelize = new Sequelize(db, user, secret, {
  host: host,
  dialect: "mysql",
});

export default sequelize;
