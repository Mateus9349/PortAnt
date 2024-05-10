import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../../telas/Home';
import Projetos from '../../telas/Projetos';
import Cursos from '../../telas/Cursos';
import Estagios from '../../telas/Estagios';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Projetos" element={<Projetos/>}/>
                <Route path="/Cursos" element={<Cursos/>}/>
                <Route path="/Estagios" element={<Estagios/>}/>
            </Routes>
        </BrowserRouter>
    )
}