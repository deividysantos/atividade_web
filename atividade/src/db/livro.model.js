import mongoose from "mongoose";
import "@/db";

const Schema = mongoose.Schema;

var LivroSchema = new Schema(
    {
        titulo_do_livro: String,
        preco_do_livro: Number,
        numero_de_paginas: Number,
        autor: String
    },
    {  versionKey: false, collection: 'livros' }
)

export const Livro = mongoose.models.Livro || mongoose.model("Livro", LivroSchema);