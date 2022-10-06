import React, {useState} from 'react';
import styles from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código}
  const [searchInput,setSearchInput] = useState("");
  const changeHandler = (e) =>{
    setSearchInput(e.target.value);
  }
  return(
   
  
    <div className={styles.container}>
      <input type="text" placeholder={"City..."}
      onChange={changeHandler} />
      <button onClick={()=>onSearch(searchInput)} className={styles.btn} >Agregar</button>
    </div>
 
  )
};