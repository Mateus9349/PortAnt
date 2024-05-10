import React from "react";
import './style.css'

export default function CardCurso(props){
    return(
        <section className="card-curso">
            <div className="container-img-curso">
                <img className="img-curso" src={props.imagem} alt={props.titulo}/>
            </div>
            <div className="container-curso" >
                <h2 className="titulo">{props.titulo}</h2>
                <p className="texto" >{props.texto}</p>
            </div>
        </section>
    )
}