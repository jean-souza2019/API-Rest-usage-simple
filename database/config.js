const Sequelize = require('sequelize');
require('dotenv').config();

const instancia = new Sequelize(
    process.env.BD_NAME,
    process.env.BD_USER,
    process.env.BD_PWD,
    {
        dialect: process.env.BD_DIALECT,
        port: process.env.BD_PORT,
    },

);

module.exports = instancia;