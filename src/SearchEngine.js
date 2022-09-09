import axios from "axios";
import { useState } from "react";

import './App.css';
import './index.css';

function SearchEngine() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showTemperaure(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handSubmit(event) {
    event.preventDefault();
    const apiKey = "238f6bbecd817b0849866bc3d0d8b987";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showTemperaure);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="SearchForm" onSubmit={handSubmit}>
      <input type="search" placeholder="Enter a city" className="SearchInput" onChange={updateCity}></input>
      <input type="submit" value="Search" className="SeacrhButton"></input>
    </form>
  );

    return form;

}

export default SearchEngine;
