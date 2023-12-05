const express = require('express');
const rota = express.Router();

//CADASTRO NO BANCO DE DADOS
rota.post('/produtos', async(req, res)=> {
    try {
        const produtos = await Produto.create(req.body);
        res.status(200).json(produtos);        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//TRAZER PRODUTOS CADASTRADOS
rota.get('/produtos', async(req, res) => {
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
rota.get('/produtos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// UPDATE UM PRODUTO
rota.put('/produtos/:id', async(req, res) => {
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
rota.delete('/produtos/:id', async(req, res) => {
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