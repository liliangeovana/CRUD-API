
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;


//PERMITE A APLICAÇÃO A TER ACESSO A DADOS JSON
app.use(express.json())

app.get('/', (req, res)=> {
    res.send('Hello NODE API');
});

app.get('/blog', (req, res)=> {
    res.send('Hello blog');
});

//ROTAS
app.use('/api/produtos', productRoute);

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