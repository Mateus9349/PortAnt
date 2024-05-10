import React from "react";
import foto from '../../img/Foto_curriculo2.jpg'
import './style.css'

export default function Sobre(){
    return(
        <section className="sobre">
            <img className="foto" src={foto} />

            <div className='containerSkill'>
                <h1 className="titulo-skill">Tecnologias</h1>
                <ul>
                    <li className="skill">HTML</li>
                    <li className="skill">CSS</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">React</li>
                    <li className="skill">React Native</li>
                    <li className="skill">Rest</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">Git/GitHub</li>
                </ul>
            </div>
        </section>
    )
}