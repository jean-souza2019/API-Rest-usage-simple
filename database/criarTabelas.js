const ModeloTabela = require('../models/dados')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criaca com sucesso;'))
    .catch(console.log)