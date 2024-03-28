const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Livro = require('./livro.model')

app.use(cors());
app.use(express.json());

const db_host = 'localhost';
const db_port = 27017;
const db_db   = 'livros';   
const mongoURI = `mongodb:\/\/${db_host}:${db_port}/${db_db}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });

app.get('/', async (req, res) => {
    res.send("ta funcionando");
})

app.get('/livros', (req, res) => {
    Livro.find({})
        .then((livros) => {
            res.send(livros);
        })
        .catch( (err) => {
            res.status(500).send();
        });        
})

app.get('/livros/:id_livro', (req, res) => {
    let id = req.params.id_livro;

    Livro.findById(id)
      .then((livro) => {
        res.send(livro).send();
      })
      .catch((err) => {
        res.status(500).send();
      })      
})

app.post('/livros', async (req, res) => {
    let livro = {
        titulo_do_livro: req.body.titulo_do_livro,
        preco_do_livro: req.body.preco_do_livro,
        numero_de_paginas: req.body.numero_de_paginas,
        autor: req.body.autor
    }

    Livro.create(livro)
        .then((livro) => {
            res.status(201).send(livro);
        })
        .catch((err) => {
            res.status(500).send();
        })
})

app.listen(8080, "0.0.0.0", () => {
    console.log('Escutando a porta 8080...');
});

process.on("SIGINT", () => {
    console.log("Saindo da aplicação...")
    mongoose.connection.close()
        .then(() => {
            console.log("Banco de dados desconectado.")
            console.log("Bye.")
            process.exit(0);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        })
})