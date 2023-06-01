const mongoose = require("mongoose");

const UserModelSchema = new mongoose.Schema({
    Nickname: String,
    Nivel: String,
    Personagem: {
                type: mongoose.Schema.Types.ObjectId, 
                ref:"Personagens",
                require: true}
});

module.exports = mongoose.model("User", UserModelSchema);