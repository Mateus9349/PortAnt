import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './style.css'

export default function Carrossel(props){
    const carrossel =useRef();
    const [whidth, setWhidth] = useState(0);

    useEffect( ()=> {
        setWhidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    }, [])

    return (
        <div className="main-card">
            <motion.div ref={carrossel} className="carrossel-card" whileTap={{ cursor: "grabbing" }}>
                <motion.div className="inner-card" drag="x" dragConstraints={{right: 0, left: - whidth}}> 

                    {props.images.map(image => (
                        <motion.div className="item-card" key={image}>
                            <h1 className="text-carrossel">{image.name}</h1>
                            <img src={image.image}/>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    )
}