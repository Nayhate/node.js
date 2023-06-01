const User = require("../models/UserModel");
const Personagem = require("../models/PersonagemModel");

module.exports = {

    //  Criação de DADOS por POST.
    async create(req, res){
        const{Nickname, Nivel, Personagem} =  req.body;
        
        const userCriado = await User.create({
            Nickname,   
            Nivel,
            Personagem
        })
        return res.json(userCriado);
    },

    // Leitura indiscriminada de DADOS por GET.
    async read(req, res){
        const userList = await User.find().populate("Personagem");
        return res.json(userList);
    },
    // Leitura especifica de DADOS por GET.
    async search(req, res){
        const{id} = req.params;
        const userID = await User.findOne({_id:id});
        return res.json(userID)
    },
    // Modifica o arquivo apartir do ID por POST.
    async update(req, res){
        const{id} = req.params;
        const {Nickname, Nivel, Personagem} = req.body;
        const user = await User.findOne({_id:id});

        user.Nickname = Nickname;
        user.Nivel = Nivel;
        user.Personagem = Personagem;

        await user.save();

        return res.json(user)
    },
    // Deleta os DADOS inserido por DELETE.
    async delete(req, res){
        const{id} = req.params;
        const userDeletado = await User.findOneAndDelete({_id:id});
        if(userDeletado){
            return res.json(userDeletado);
        }
        return res.status(401).json({error: "Registro não encontrado."});
    }    
}