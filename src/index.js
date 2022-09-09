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
      <a href="#" target="_blank" rel="nofollow">Kyiv</a>
      <a href="#" target="_blank" rel="nofollow">Lisbon</a>
      <a href="#" target="_blank" rel="nofollow">Paris</a>
      <a href="#" target="_blank" rel="nofollow">San Francisco</a>
    <SearchEngine />
      
      <button type="button" className="btn btn-success">Current</button>
      <div>
        <h1>Lisbon</h1>
        <h2>Monday 12:16</h2>
        <h3>Clouds</h3>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>ICON</p>
            </div>
            <div className="col">
              <p>Precipitation: 70%</p>
              <p>Wind: 5km/h</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="ForecastDayOfWeek">Fri</h3>
              <p>Icon</p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Sat</h3>
              <p>Icon</p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Sun</h3>
              <p>Icon</p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Mon</h3>
              <p>Icon</p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
            <div className="col">
              <h3 className="ForecastDayOfWeek">Tue</h3>
              <p>Icon</p>
              <p className="ForecastTemperature">24&#8451;</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>
        This project was coded by 
        <a href="#" target="_blank" rel="nofollow"> Anna Shapovalova</a>
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
