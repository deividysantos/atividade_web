const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var LivroSchema = new Schema(
    {
        titulo_do_livro: String,
        preco_do_livro: Number,
        numero_de_paginas: Number,
        autor: String
    },
    {  versionKey: false, collection: 'livros'  }
)

module.exports = mongoose.model("Livro", LivroSchema);