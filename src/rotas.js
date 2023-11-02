const express = require("express");
const {
  excluirProdutoPorID,
  editarDadosDoProduto,
  detalharProduto,
} = require("./controlador/controladores");
const verificarUsuarioLogado = require("./intermediario/intermediarios");

const rotas = express();

rotas.delete("/produto/:id", excluirProdutoPorID);
rotas.put("/produto/:id", editarDadosDoProduto);
rotas.get("/produto/:id", detalharProduto);

rotas.use(verificarUsuarioLogado);

module.exports = rotas;
