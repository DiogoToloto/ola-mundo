import React from "react";
import styles from "./PostModelo.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal/BotaoPrincipal";

export default function PostModelo({ fotoCapa, titulo, texto, banner, linguagens, link }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.imgBanner}>
        <img src={banner} />
      </div>
      <div className={styles.postConteudoContainer}>
       <p>{texto} </p>
       <p>{linguagens}</p>
       <BotaoPrincipal 
       tamanho="lg"
       > 
            <a href={link}>Ver</a>
        </BotaoPrincipal>
        </div>
        
    </article>
  );
}
