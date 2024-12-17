import React from "react"
import Banner from "componentes/Banner/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return (
        <main>
            <Banner/>

            <Outlet/>
            {/* Renderizar o conteudo da rota aqui  */}
        </main>
    )
}