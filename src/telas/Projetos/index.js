import React, { useState } from "react";
import Footer from "../../componentes/footer/Footer";
import NavBar from "../../componentes/navbar/NavBar";
import CardProjeto from "../../componentes/CardProjeto";

import SectionProjetoInatu from "../../componentes/SectionProjetoInatu";
import Button from "../../componentes/Button";

import { requisitos } from "../../componentes/js/imagensProjetos";


export default function Projetos() {
    const [clicked, setClicked] = useState(true);

    return (
        <>
            <NavBar />

            <CardProjeto
                images={requisitos}
                titulo='Levantamento de requisitos'
                informacoes='Participei ativamente do levantamento de requisitos da plataforma inatú, sendo o pricipal responsável pela atividade, através de entrevistas e analise observacional'
            />

            <SectionProjetoInatu />
            {/* <Button text={'Projeto inatu'} onClick={() => setClicked(!clicked)}/>
            {clicked ? <SectionProjetoInatu/> : ''} */}

            {/* <CardProjeto 
            images= {requisitos}
            titulo = 'API com Node.js e Express'
            informacoes = 'Desenvolvi a API que comunica as requisições do back-end utilizando node.js afim de alinhar meu conhecimento prévio em javaScript e realizar as requisições afim de solucionar as demandas com prazos curtos. O banco de dados utilizado foi o MySQL, utilizando das relações entre as tabelas para minimizar qualquer resundância de dados.'
            /> */}

            <Footer />
        </>
    )
}