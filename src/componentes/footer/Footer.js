import React from "react";
import './style.css'

export default function Footer(){
    return(
        <footer>
            <a href="https://www.linkedin.com/in/mateus9349/">
                <img className="icon" src="assets\img\linkedin.png"/>
            </a>
            <a href="https://github.com/Mateus9349">
                <img className="icon" src="assets/img/github.png"/>
            </a>
            <a href="https://www.instagram.com/mateus_passos1/">
                <img className="icon" src="assets/img/instagram.png" />
            </a>
        </footer>
    )
}