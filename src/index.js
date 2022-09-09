import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchEngine from './SearchEngine';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <a className="NavigationCities" href="#" target="_blank" rel="nofollow">Kyiv</a>
      <a className="NavigationCities" href="#" target="_blank" rel="nofollow">Lisbon</a>
      <a className="NavigationCities" href="#" target="_blank" rel="nofollow">Paris</a>
      <a className="NavigationCities" href="#" target="_blank" rel="nofollow">San Francisco</a>
    
      <form className="SearchForm">
        <input type="search" placeholder="Enter a city" className="SearchInput"></input>
        <input type="submit" value="Search" className="SeacrhButton"></input>
      <button type="button" className="CurrentWeatherButton">Current</button>
      </form>
      

      <div className="container CurrentWeatherContainer">

        <div className="row">
          <h1 className="CurrentCity">Lisbon</h1>
          <h2 className="CurrentWeather">Monday 12:16</h2>
          <h3 className="CurrentWeather">Clouds</h3>
        </div>

      
        <div className="row">
          <div className="col">
            <p></p>
          </div>
          <div className="col">
            <p className="CurrentWeather">Precipitation: 70%</p>
            <p className="CurrentWeather">Wind: 5km/h</p>
          </div>
        </div>
     
      </div>
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="ForecastDayOfWeek">Fri</h3>
              <p></p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Sat</h3>
              <p></p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Sun</h3>
              <p></p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Mon</h3>
              <p></p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Tue</h3>
              <p></p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>
        This project was coded by 
        <a href="#" target="_blank" rel="nofollow"> Anna Shapovalova </a>
        and is
        <a href="#" target="_blank" rel="nofollow"> open-sourced on GitHub </a>
        and hosted on 
        <a href="#" target="_blank" rel="nofollow"> Netlify</a>
         .
      </p>
     </footer>















   
  </React.StrictMode>
);


reportWebVitals();
