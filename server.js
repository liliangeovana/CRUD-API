
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Produto = require('./modelos/modeloProduto')
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

//PERMITE A APLICAÇÃO A TER ACESSO A DADOS JSON
app.use(express.json())

//ROTAS
app.get('/', (req, res)=> {
    res.send('Hello NODE API');
});

app.get('/blog', (req, res)=> {
    res.send('Hello blog');
});

//CADASTRO NO BANCO DE DADOS
app.post('/produtos', async(req, res)=> {
    try {
        const produtos = await Produto.create(req.body)
        res.status(200).json(produtos);        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//TRAZER PRODUTOS CADASTRADOS
app.get('/produtos', async(req, res) => {
    try {
        //await = para esperar os dados que virão do banco
        //{} vazios = trazer todos os produtos
        const produtos = await Produto.find({});
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//TRAZER UM PRODUTO PELO ID
app.get('/produtos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// UPDATE UM PRODUTO
app.put('/produtos/:id', async(req, res) => {
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
        res.status(500).json({message: error.message})
    }
})

//DELETANDO UM PRODUTO
app.delete('/produtos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findByIdAndDelete(id);
        if(!produto){
            return res.status(404).json({message: `Produto não encontrado com o ID ${id}`})
        }
            res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

//CONEXÃO COM BANCO DE DADOS
mongoose.connect(MONGO_URL).then(()=>{
    console.log ('Conectado ao MongoDB');
        //INICIANDO SERVIDOR
        app.listen(PORT, ()=>{
            console.log(`Node API app está rodando na porta ${PORT}`);
        });
}).catch((error)=>{
    console.log(error);
})