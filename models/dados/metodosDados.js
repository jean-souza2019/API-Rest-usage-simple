const Modelo = require('../dados/index')

module.exports = {
    listar(){
        return Modelo.findAll();
    },

    inserir(fornecedor){
        return Modelo.create(fornecedor);
    }
}