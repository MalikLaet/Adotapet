import React from 'react'
import styles from './RegisterMain.module.css'
import logoAzul from './logo-Azul.svg'
import RegisterForm from '../../componentes/Forms/RegisterForm'


export default function RegisterMain() {
  return (
    < div className={styles.container}>
    <img className={styles.logo} src={logoAzul} alt='Logo azul do adopet'/>

    <p className={styles.paragrafo}>Ainda não tem cadastro?</p>
    <p className={styles.paragrafo}>Então, ates de buscar seu melhor amigo, precisamos de alguns dados:</p>

    <div><RegisterForm/></div>
  </div>

  )
}
