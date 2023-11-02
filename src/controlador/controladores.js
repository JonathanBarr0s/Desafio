const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../conexao");

const excluirProdutoPorID = async (req, res) => {
  try {
    const idProduto = req.params.id;

    const verificarSeProdutoExiste = await knex("produtos")
      .where("id", idProduto)
      .del();

    if (verificarSeProdutoExiste > 0) {
      return res.status(200).json({ message: "Produto excluído com sucesso" });
    } else {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

module.exports = {
  excluirProdutoPorID,
};
