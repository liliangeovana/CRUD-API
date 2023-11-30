const express = require('express');
const app = express();

//ROTAS

app.get('/', (req, res)=> {
    res.send('Hello NODE API')
});

app.listen(3000, ()=>{
    console.log('Node API app está rodando na porta 3000');
});

