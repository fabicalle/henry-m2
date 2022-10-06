import React from 'react';
import styles from './Card.module.css'
export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.body}>
       <button onClick={props.onClose} className ={styles.btn}>X</button>
       <h4> {props.name} </h4>
       <div className={styles.info}>
        <div className={styles.temp}>
        <p>MIN</p>
        <p>{props.min} </p>
        </div>
        <div className={styles.temp}>
        <p>MAX</p>
        <p>{props.max} </p>
        </div>
       </div>
       <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt= {"img"}  />
    </div>
  )

};
