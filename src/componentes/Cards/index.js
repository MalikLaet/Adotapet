import React from 'react'
import styles from './Card.module.css'


export default function CardsPets({nome, imagem, idade, descricao, local}) {
  return (
    <main>
      <div>
        <img src={imagem} alt={nome}/>
        <h4>{nome}</h4>
      <ul className={styles.container}>
        <li>{idade}</li>
        <li>{descricao}</li>
      </ul>
      <p>{local}</p>
      </div>
         
    </main>
    )
}
