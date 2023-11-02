const express = require("express");
const { excluirProdutoPorID } = require("./controlador/controladores");
const verificarUsuarioLogado = require("./intermediario/intermediarios");

const rotas = express();

rotas.delete("/produto/:id", excluirProdutoPorID);

rotas.use(verificarUsuarioLogado);

module.exports = rotas;
