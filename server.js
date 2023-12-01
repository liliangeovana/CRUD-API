
const express = require('express');
const mongoose = require('mongoose');
const Produto = require('./modelos/modeloProduto')
const app = express();

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
        const produto = await Produto.find({});
        res.status(200).json(produto);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//CONEXÃO COM BANCO DE DADOS
mongoose.connect('mongodb+srv://admin:E$tagio2023@urlapi.vpfqkqh.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
    console.log ('Conectado ao MongoDB');
        //INICIANDO SERVIDOR
        app.listen(3000, ()=>{
            console.log('Node API app está rodando na porta 3000');
        });
}).catch((error)=>{
    console.log(error);
})