import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './style.css'

export default function CardProjeto(props) {
    const carrossel = useRef();
    const [whidth, setWhidth] = useState(0);

    useEffect(() => {
        setWhidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    }, [])

    return (
        <section className="container">
            <h1 className="projeto">{props.titulo}</h1>

            <div className="main">
                <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
                    <motion.div className="inner" drag="x" dragConstraints={{ right: 0, left: -whidth }}>

                        {props.images.map(image => (
                            <motion.div className="item" key={image}>
                                <img src={image} />
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
            </div>

            <p className="info">{props.informacoes}</p>
        </section>
    )
}