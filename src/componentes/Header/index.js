import React from 'react'
import {ReactComponent as Mensagem} from './Mensagens.svg' 
import {ReactComponent as Casa} from './Casa.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
        <header className={styles.cabecalho}>
            <Casa/>
            <Mensagem/>
        </header>
    )
}
