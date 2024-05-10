import React from "react";
import './style.css';

export default function SectionSkills(){
    return(
        <div className="container-softPessoal">
            <div className="containerSoftSkill">        
                <h2>Soft Skills</h2>
                <ul>
                    <li className="item-soft">Comunicação</li>
                    <li className="item-soft">Flexibilidade e resiliência</li>
                    <li className="item-soft">Trabalho em equipe</li>
                    <li className="item-soft">Disciplina</li>
                    <li className="item-soft">Empatia</li>
                </ul>
            </div>

            <div className="containerSoftSkill">
                <h2><span className="item-soft">Nascimento:</span> 06/05/199</h2>
                <h2><span className="item-soft">Estado civil:</span> Solteiro</h2>
                <h2><span className="item-soft">Nacionalidade:</span> Brasileiro</h2>
                <h2><span className="item-soft">Contato:</span> (92) 98254-1621</h2>
                <h2><span className="item-soft">E-mail:</span> mateusvpdl@outlook.com</h2>
            </div>
        </div>
    )
}