import React from 'react'
import Logo from './Logo.svg'
import styles from './StartMain.module.css'
import ButtonLink from '../ButtonLink'
import Ilustracao from './Ilustracao.png'

export default function StartMain() {
  return (
    <main className={styles.container}>
        <img src={Logo} alt='Logo da adopet' className={styles.logo}/>

        <h2 className={styles.titulo}>Boas-vindas!</h2>

        <p className={styles.texto}> Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>

        <nav className={styles.nav}>
            <ButtonLink  url='./Login'>
                Já tenho conta
            </ButtonLink>

            <ButtonLink url="./Cadastro">
                Quero me cadastrar
            </ButtonLink>
        </nav>
        
        <img src={Ilustracao} width={247.34} height={312.77}  alt='Ilustração da pagina inicial com um cachorro e um gato' />
    </main>
    )
}
