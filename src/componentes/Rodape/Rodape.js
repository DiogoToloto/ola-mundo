import React from "react"
import styles from "./Rodape.module.css"
import {ReactComponent as MacaRegistrada} from "assets/marca_registrada.svg"

export default function Rodape (){
    return(
        <footer className={styles.rodape}>
            <MacaRegistrada/>

            Desenvolvido por Alura
        </footer>
    )
}