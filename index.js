const express = require('express');
const bodyParser = require('body-parser');
const Rotas = require('./routes/dados')
require('dotenv').config();

const app = express();
const port = process.env.PORT_API;

app.use(bodyParser.json());
app.use('/dados', Rotas)

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})