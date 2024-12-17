import React from "react"
import PostModelo from "componentes/PostModelo/PostModelo";
import fotoSobreMim from "../../assets/sobre_mim_foto.jpeg";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="SobreMim">
      <h3 className={styles.subtitulo}>olá eu sou o diogo</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Diogo Toloto"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Eu tenho 21 anos, moro no centro de São Paulo e estou cursando Análise e
        Desenvolvimento de Sistemas pela Descomplica desde agosto de 2024. Sou um
        desenvolvedor iniciante, com conhecimento em tecnologias como React,
        Python, Java, SQL e desenvolvimento web.
      </p>

      <p className={styles.paragrafo}>
        Além de estudar TI, Eu tenho projetos pessoais que mostram minhas
        habilidades, como um blog chamado TEC Nautas, que compartilha notícias e
        novidades da área de tecnologia.
      </p>

      <p className={styles.paragrafo}>
        Eu também estou aprendendo linguagens como Assembly e expandindo seus
        conhecimentos em áreas como engenharia de dados, análise de dados e até
        em idiomas como inglês e espanhol.
      </p>

      <p className={styles.paragrafo}>
        Nos seus momentos livres, gosta de jogos (utilizando xCloud no
        notebook), leitura e arte realista. Seu objetivo atual é conquistar sua
        primeira oportunidade profissional na área de tecnologia.
      </p>
    </PostModelo>
  );
}
