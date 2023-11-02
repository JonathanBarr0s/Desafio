const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../conexao");

const excluirProdutoPorID = async (req, res) => {
  try {
    const idProduto = req.params.id;

    const verificarSeProdutoExisteEDeletar = await knex("produtos")
      .where("id", idProduto)
      .del();

    if (verificarSeProdutoExisteEDeletar > 0) {
      return res.status(200).json({ message: "Produto excluído com sucesso" });
    } else {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

const editarDadosDoProduto = async (req, res) => {
  try {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const idProduto = req.params.id;

    if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios." });
    }

    const verificarSeProdutoExisteEAtualizar = await knex("produtos")
      .where("id", idProduto)
      .update({
        descricao: descricao,
        quantidade_estoque: quantidade_estoque,
        valor: valor,
        categoria_id: categoria_id,
      });

    if (verificarSeProdutoExisteEAtualizar) {
      return res
        .status(200)
        .json({ mensagem: "Produto atualizado com sucesso." });
    } else {
      return res.status(404).json({ mensagem: "Produto não encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

const detalharProduto = async (req, res) => {
  try {
    const idProduto = req.params.id;
    const verificarSeProdutoExiste = await knex("produtos")
      .where("id", idProduto)
      .first();

    if (verificarSeProdutoExiste) {
      return res.json(verificarSeProdutoExiste);
    } else {
      return res.status(404).json({ mensagem: "Produto não encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

module.exports = {
  excluirProdutoPorID,
  editarDadosDoProduto,
  detalharProduto,
};
