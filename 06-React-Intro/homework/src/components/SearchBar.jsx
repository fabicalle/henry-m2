import React from 'react';
import styles from './SearchBar.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return(
    <div className={styles.container}>
      <input type="text" placeholder={"City..."} />
      <button onClick={() =>props.onSearch('Searching City...')} className={styles.btn} >Agregar</button>
    </div>
  )
};