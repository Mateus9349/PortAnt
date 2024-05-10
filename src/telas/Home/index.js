import React from "react";
import Footer from "../../componentes/footer/Footer";
import NavBar from "../../componentes/navbar/NavBar";
import Sobre from '../../componentes/secao_sobre/Sobre';
import Carrossel from "../../componentes/Carrossel";
import SectionSkills from "../../componentes/SectionSkills";

import './style.css'

import  imagem1 from'../../img/quartel.jpeg'
import  imagem2 from'../../img/faculdade.jpeg'
import  imagem3 from'../../img/camara.jpeg'
import  imagem4 from'../../img/curso_web_mobile.jpg'

const images = [{name: 'Exercito', image: imagem1}, 
{name: 'Engenharia da Computação', image: imagem2},
{name: 'Estagio Camara Municipal', image: imagem3},
{name: 'Formação Web Mobile', image: imagem4}
]

export default function Home(){
    return(
        <>
            <NavBar/>
            <Sobre/>
            <SectionSkills/>
            <Carrossel
            images = {images}
            />
            <Footer/>
        </>
    )
}