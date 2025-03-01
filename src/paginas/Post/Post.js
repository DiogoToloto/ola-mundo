import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "componentes/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/public/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
              banner={post.banner}
              texto={post.texto}
              linguagens={post.linguagens}
              link={post.link}
            >
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
