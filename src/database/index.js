require('dotenv').config();
const { Pool } = require('pg');

const dbConfig = { user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD 
};
const connection = new Pool(dbConfig);

module.exports = connection;