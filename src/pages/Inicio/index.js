import React from 'react'
import Footer from '../../componentes/Footer'
import Header from '../../componentes/Header'
import styles from './Inicio.module.css'
import StartMain from '../../componentes/StartMain'

export default function Inicio() {
  return (
    <>
    <div className={styles.container}>
        <Header/>
        <StartMain/>
    </div>
        <Footer/>
    </>
  )
}
