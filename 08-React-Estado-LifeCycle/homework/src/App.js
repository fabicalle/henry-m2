import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import axios from 'axios';

export default function App() {
 

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {
    axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => 
      setCities((oldCities) => [...oldCities, response.data])
      );
  }
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }


  return (
    <div className="App">
      { }
      <div>
      <Nav onSearch={onSearch} />
      </div>
      <div>
      <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}
