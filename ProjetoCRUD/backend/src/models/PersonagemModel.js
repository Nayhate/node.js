//Criação do Modulo dentro do Banco.
const mongoose = require("mongoose");

const PersonagemModelSchema = new mongoose.Schema({
        Nome: String,
        Classe: String,
        Idade: String,
        Nacionalidade: String,
        Afiliacao: String,
});

module.exports = mongoose.model("Personagens", PersonagemModelSchema);

