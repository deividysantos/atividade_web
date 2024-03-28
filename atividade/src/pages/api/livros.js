import { Livro } from "@/db/livro.model";

export default function handler(req, res) {
    switch(req.method) {
        case 'GET':
            getLivros(req,res);
            break;
        case 'POST':
            postLivro(req, res);
            break;
        default:
            res.status(405).json({});
    }
}

async function postLivro(req, res) {
    let livro = new Livro({
        titulo_do_livro: req.body.titulo_do_livro,
        preco_do_livro: req.body.preco_do_livro,
        numero_de_paginas: req.body.numero_de_paginas,
        autor: req.body.autor
    });
    await livro.save();
    res.status(201).json(livro);
}

async function getLivros(req, res) {
    let livros = await Livro.find({});
    res.status(200).json(livros);
}