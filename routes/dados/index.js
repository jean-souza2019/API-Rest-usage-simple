const router = require('express').Router();
const TabelaDados = require('../../models/dados/metodosDados');
const Dados = require('./dados');

router.get('/', async (req, res) => {
    const resultados = await TabelaDados.listar();
    res.status(200).send(JSON.stringify(resultados));
})

router.post('/', async (req, res) => {
    const dadosRecebidos = req.body;
    const dados = new Dados(dadosRecebidos);
    await dados.criar();
    res.status(201).send(JSON.stringify(
        {
            "ID": dados.id,
            "DataCriação": dados.createdAt
        }
    ));
})

module.exports = router;