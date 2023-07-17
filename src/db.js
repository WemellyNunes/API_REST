import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: 'variaveis.env' });

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,
});

export default sequelize;
