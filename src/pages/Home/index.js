import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import pets from '../../componentes/json/db.json'
import CardsPets from '../../componentes/Cards'

export default function Home() {
  return (
    <>
    <Header/>

        {
            pets.map((pet) => (
                <CardsPets
                idade={pet.idade}
                nome={pet.nome}
                imagem={pet.imagem}
                descricao={pet.descricao}
                local={pet.local}
                />
            ))
        }

    <Footer/>
    </>
    )
}
