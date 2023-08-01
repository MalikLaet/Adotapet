import React from 'react'
import styles from './LoginMain.module.css'
import logoAzul from './Logo-azul.svg'
import LoginForm from '../Forms/LoginForm'
export default function LoginMain() {
  return (
        <main className={styles.main}>
            <img src={logoAzul} alt='Logo azul adopet' className={styles.logo}/>
            
            <p className={styles.paragrafo}>Já tem conta? Faça seu login:</p>

            <LoginForm/>
        </main>
    )
}
