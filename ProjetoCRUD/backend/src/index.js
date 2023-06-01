const bodyParser = require('body-parser');
//Criação do SERVER.
const express = require("express");
const app = express();
app.use(bodyParser.json());
//Conexão com BANCO.
require("./config/dbConfig");
//Conexão com a ROTA.
const rotas = require("./rotas")
app.use(express.json());
app.use(rotas);
//Conexão com HTML.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
//Porta do Servidor.
app.listen(8080);
