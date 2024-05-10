import React from "react";
import NavBar from "../../componentes/navbar/NavBar";
import Card from "../../componentes/Card";
import Footer from "../../componentes/footer/Footer";

export default function Estagios(){
    return(
        <>
        <NavBar/>
            <Card
            imagem1='assets\img\Idesam01.jpeg'
            imagem2='assets\img\Idesam02.jpeg'
            imagem3='assets\img\Idesam03.jpeg'
            imagem4='assets\img\Idesam04.jpeg'
            titulo='Estagio em desenvolvimento full stack'
            empresa='IDESAM'
            periodo="06/03/2023 - Atualmente"
            texto='Responsavel por desenvolver junto a equipe a plataforma web utilizada pelas usinas de refinaria, afim de controlar o 
            recebimento de materia prima, estoques, processos de produção, despesas e saida de produtos. Assim também como desenvolver o aplicativo 
            movel que auxilia os extrativistas, marcando pontos de extração, materia prima retirada por local, gastos, ganhos, controle de materias,
            controle de equipe etc.'
            />

            <Card
            imagem1='assets\img\estagio_camara01.jpeg'
            imagem2='assets\img\estagio_camara02.jpeg'
            imagem3='assets\img\estagio_camara03.jpeg'
            imagem4='assets\img\estagio_camara04.jpeg'
            titulo='Estagio em suporte e manutenção'
            empresa='Câmara Municipal de Manaus'
            periodo="01/10/2021 - 31/12/2022"
            texto='Estágiario na Diretoria de Gestão de Tecnologia da Informação,
            responsável por prestar suporte técnico aos usuários e realizar
            manutenções preventivas e corretivas nas máquinas.'
            />

            <Footer/>
        </>
    )
    
}