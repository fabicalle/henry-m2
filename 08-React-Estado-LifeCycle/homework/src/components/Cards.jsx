import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
  return (
    <div className={styles.container}>
      {cities && cities.map ( city=> (
        <Card
        id= {city.id}
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => onClose(city.id)}
        key={city.id}
      />
      ))
      }
    </div>
  )
}else{
  return(
  <div>No Cities</div>
  )
}
};