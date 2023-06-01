//Criação da Conexão do BD.
const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/personagens";

const conection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conection;