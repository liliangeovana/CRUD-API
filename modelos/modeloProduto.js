const mongoose = require('mongoose');

const esquemaProduto = mongoose.Schema(
    {
        nome: {
            type: String,
            required: (true, "Por favor, insira o nome do produto: ")
        },

        quantidade: {
            type: Number,
            required: true,
            default: 0
        },

        preco: {
            type: Number,
            required: true
        }
    }, 
    {
        //CRIA DOIS CAMPOS
       timestamps: true
    }
);

const Produto = mongoose.model('Produto', esquemaProduto);
module.exports= Produto;