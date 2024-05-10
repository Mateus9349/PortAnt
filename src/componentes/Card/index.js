import React from "react";
import styles from './Card.module.css';

export default function Card(props){
    return(
        <section className={styles.card}>
            <div className={styles.containerImg}>
                <img className={styles.img} src={props.imagem1} alt={props.titulo}/>
                <img className={styles.img} src={props.imagem2} alt={props.titulo}/>
                <img className={styles.img} src={props.imagem3} alt={props.titulo}/>
                <img className={styles.img} src={props.imagem4} alt={props.titulo}/>
            </div>

            <div className={styles.container} >
                <h2 className={styles.titulo}>{props.titulo}</h2>
                <p className={styles.texto} >{props.empresa}</p>
                <p className={styles.texto} >{props.periodo}</p>
                <p className={styles.texto} >{props.texto}</p>
            </div>
        </section>
    )
}