const TabelaDados = require('../../models/dados/metodosDados');

class Dados {
    constructor({ id, empresa, email, categoria, createdAt, updatedAt }) {
        this.id = id;
        this.empresa = empresa;
        this.email = email;
        this.categoria = categoria;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async criar(){
        const resultado = await TabelaDados.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })

        this.id = resultado.id;
        this.createdAt = resultado.createdAt;
        this.updatedAt = resultado.updatedAt;
    }
}

module.exports = Dados;