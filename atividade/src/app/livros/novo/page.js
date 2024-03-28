"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NovaCategoria() {

    const [titulo_do_livro, setTitulo] = useState("");
    const [preco_do_livro, setPreco] = useState(0);
    const [numero_de_paginas, setNumeroPage] = useState(0);
    const [autor, setAutor] = useState("");

    const router = useRouter();

    const salvar = async () => {
        const livro = {titulo_do_livro, preco_do_livro, numero_de_paginas, autor};
        try {
            let res = await axios.post("https://didactic-space-couscous-w5g67vwvgvphgrp6-8080.app.github.dev/livros", livro);
            router.push("/livros");
            alert("Livro cadastrado com sucesso");
        } catch(err) {
            console.error(err);
        }
    }

    const voltar = () => {
        router.push("/livros");
    }

    return (
    <div className="border border-gray-200 p-10">
        <h1 className="text-2xl mb-5">Novo Livro</h1>
        <div>
            <div className="flex flex-col mb-5">
                <span className="pr-2">Titulo do Livro</span>
                <input className="border border-gray-200 h-10 p-3"
                    onChange={(e) => setTitulo(e.target.value)}
                    type="text" 
                    placeholder="Titulo do livro" 
                />
            </div>

            <div className="flex flex-col mb-5">
                <span className="pr-2">Preço</span>
                <input className="border border-gray-200 h-10 p-3"
                    onChange={(e) => setPreco(e.target.value)}
                    type="number" placeholder="Preço do Livro" />
            </div>

            <div className="flex flex-col mb-5">
                <span className="pr-2">Número de Paginas</span>
                <input className="border border-gray-200 h-10 p-3"
                    onChange={(e) => setNumeroPage(e.target.value)}
                    type="number" placeholder="Número de Paginas do Livro" />
            </div>

            <div className="flex flex-col mb-5">
                <span className="pr-2">Autor</span>
                <input className="border border-gray-200 h-10 p-3"
                    onChange={(e) => setAutor(e.target.value)}
                    type="text" placeholder="Autor do livro" />
            </div>

            <div className="flex flex-row gap-5">
                <button className="mt-5 text-xs p-2 bg-blue-400 rounded-md shadow-md hover:bg-blue-600 px-5" onClick={()=>salvar()}>Salvar</button>
                <button className="mt-5 text-xs p-2 bg-red-400 rounded-md shadow-md hover:bg-red-600 px-5" onClick={()=>voltar()}>Voltar</button>
            </div>
        </div>
    </div>)
}