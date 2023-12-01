
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//ROTAS
app.get('/', (req, res)=> {
    res.send('Hello NODE API');
});

app.get('/blog', (req, res)=> {
    res.send('Hello blog');
});

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