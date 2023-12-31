import React from "react";
import styles from "./Card.module.css";
import data from "../Data/data.js";

export default function CardsPets() {
  return (
    <main>
      {data.map(({ id, imagem, nome, idade, porte, descricao, local }) => (


        <div className={styles.cards} key={id}>
          <div className={styles.card}>
          <img className={styles.imagem} src={imagem} alt={nome} />
          <div className={styles.container}>
          <h4 className={styles.nome}>{nome}</h4>
          <ul className={styles.lista}>
            <li className={styles.idade}>{idade}</li>
            <li className={styles.porte}>{porte}</li>
            <li className={styles.descricao}>{descricao}</li>
          </ul>
          <p className={styles.local}>{local}</p>
          </div>
          </div>
        </div>
      ))}
    </main>
  );
}
