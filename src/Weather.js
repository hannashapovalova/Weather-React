import React from 'react';
import './css/Weather.css';

export default function Weather() {
    return (

  <div className="container CurrentWeatherContainer">
    <div className="row">
      <h1 className="CurrentCity">
        Lisbon
      </h1>
      <h2 className="CurrentWeather">
        Monday 12:16
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