import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import CardsPets from '../../componentes/Cards'
import styles from './Home.module.css'
export default function Home() {
  return (
    <>
    <Header/>

        <div className={styles.texto}>
        Olá! Veja os amigos <br/> disponíveis para adoção!
        </div>

         <CardsPets/>

    <Footer/>
    </>
    )
}
