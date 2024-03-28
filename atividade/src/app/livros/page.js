"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Livros() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(false);

    useEffect(()=>{
        setCarregando(true);
        axios.get("/api/livros")
            .then((res)=>{
                setLivros(res.data);
            })
            .catch((eer)=>{
                console.error(eer)
            })
            .finally(()=>{
                setCarregando(false);
            })
    }, []);

    return (
        <div>
            <div className="my-2">
                <Link 
                    href="/livros/novo"
                    className="text-xs  p-2 bg-blue-400 rounded-md shadow-md hover:bg-blue-600 "
                >
                    Novo Livro
                </Link>
            </div>

            <h1 className="text-2xl mb-5 mt-10">Livros cadastrados: </h1>
            
            {carregando  &&
            <p className="animate-pulse font-bold">
                Carregando livros...
            </p>}

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {livros.map((livro, idx) => {
                    return (<div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-96 p-10">
                                    <img className="object-cover object-center" src="/livro.png" alt="Livro"/>
                                </div>
                                
                                <div className="flex flex-1 flex-col space-y-2 p-4">
                                    <p>Nome: {livro.titulo_do_livro}</p>
                                    <p>Preço: {livro.preco_do_livro}</p>
                                    <p>Número de páginas: {livro.numero_de_paginas}</p>
                                    <p>Autor: {livro.autor}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}