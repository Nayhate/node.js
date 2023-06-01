//Criação dos CONTROLADORES para as funções CRUD.
const Personagens = require("../models/PersonagemModel");

module.exports = {

    //  Criação de DADOS por POST.
    async create(req, res){
        const{Nome, Classe, Idade, Nacionalidade, Afiliacao} =  req.body;
        const personagemCriado = await Personagens.create({
            Nome,
            Classe,
            Idade,
            Nacionalidade,
            Afiliacao
        })
        return res.json(personagemCriado);
    },

    // Leitura indiscriminada de DADOS por GET.
    async read(req, res){
        const personagensList = await Personagens.find();
        return res.json(personagensList);
    },
    // Leitura especifica de DADOS por GET.
    async search(req, res){
        const{id} = req.params;
        const personagensID = await Personagens.findOne({_id:id});
        return res.json(personagensID)
    },
    // Modifica o arquivo apartir do ID por POST.
    async update(req, res){
        const{id} = req.params;
        const {Nome, Classe, Idade, Nacionalidade, Afiliacao} = req.body;
        const personagem = await Personagens.findOne({_id:id});

        personagem.Nome = Nome;
        personagem.Classe = Classe;
        personagem.Idade = Idade;
        personagem.Nacionalidade = Nacionalidade;
        personagem.Afiliacao = Afiliacao;

        await personagem.save();

        return res.json(personagem)
    },
    // Deleta os DADOS inserido por DELETE.
    async delete(req, res){
        const{id} = req.params;
        const personagemDeletado = await Personagens.findOneAndDelete({_id:id});
        if(personagemDeletado){
            return res.json(personagemDeletado);
        }
        return res.status(401).json({error: "Registro não encontrado."});
    }    
}