const express = require('express');
const { model } = require('mongoose');
const Produto = require('../modelos/modeloProduto');


const router = express.Router();

//CADASTRO NO BANCO DE DADOS
router.post('/', async(req, res)=> {
    try {
        const produtos = await Produto.create(req.body);
        res.status(200).json(produtos);        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//TRAZER PRODUTOS CADASTRADOS
router.get('/', async(req, res) => {
    try {
        //await = para esperar os dados que virão do banco
        //{} vazios = trazer todos os produtos
        const produtos = await Produto.find({});
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//TRAZER UM PRODUTO PELO ID
router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// UPDATE UM PRODUTO
router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findByIdAndUpdate(id, req.body);
        //Não encontrado nenhum produto na base de dados
        if (!produto){
            return res.status(404).json({message: `Produto não encontrado com o ID ${id}`})
        }
        const updateProduto = await Produto.findById(id);
        res.status(200).json(updateProduto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//DELETANDO UM PRODUTO
router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findByIdAndDelete(id);
        if(!produto){
            return res.status(404).json({message: `Produto não encontrado com o ID ${id}`});
        }
            res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

//Exportanto todas as rotas para fora desses arquivos.
module.exports = router;