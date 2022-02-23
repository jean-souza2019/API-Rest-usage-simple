const Sequelize = require('sequelize');
const instancia = require('../../database/config');
const intancia = require('../../database/config')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}
const opcoes = {
    freezeTableName: true,
    tableName: 'arquivodedados',
    timestamps: true
 }

module.exports = instancia.define('dados', colunas, opcoes);