import React from 'react';
import CurrentDate from './CurrentDate';
import axios from "axios";
import './css/Weather.css';
import { useState } from 'react';

export default function Weather() {

  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState(null);


    function showTemperaure(response) {
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

    return (

  <div className="container CurrentWeatherContainer">
    <div className="row">
      <h1 className="CurrentCity">
        Lisbon
      </h1>
      <h2 className="CurrentWeather">
       <CurrentDate />
      </h2>
      <h3 className="CurrentWeather">
        Clouds
      </h3>
    </div>
    <div className="row">
      <div className="col">
      </div>
      <div className="col">
        <p className="CurrentWeather">
          Precipitation: 70%
        </p>
        <p className="CurrentWeather">
          Wind: 5km/h
        </p>
      </div>
    </div>
  </div>

    );
}