//Criação das ROTAS de acesso.
const express = require("express");
const rotas = express.Router();
const PersonagemController = require("./controllers/PersonagemController");
const UserController = require("./controllers/UserController");

rotas.post("/personagens", PersonagemController.create);
rotas.post("/personagens/:id", PersonagemController.update);
rotas.get("/personagens", PersonagemController.read);
rotas.get("/personagens/:id", PersonagemController.search);
rotas.delete("/personagens/:id", PersonagemController.delete);

rotas.post("/user", UserController.create);
rotas.post("/user/:id", UserController.update);
rotas.get("/user", UserController.read);
rotas.get("/user/:id", UserController.search);
rotas.delete("/user/:id", UserController.delete);

//Exporta as Rotas na variavel ROTAS.
module.exports = rotas;