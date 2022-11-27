const { Pool } = require('pg')
const dotenv = require('dotenv')
dotenv.config()


const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;
const pgPool = new Pool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = pgPool;