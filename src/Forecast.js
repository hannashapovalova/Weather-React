import React from 'react';
import './css/Forecast.css';

export default function Forecast() {
    return (
       <div className="Forecast">
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="ForecastDayOfWeek">
            Fri
          </h3>
          <p className="ForecastTemperature">
            24&#8451;
          </p>
        </div>
        <div className="col">
          <h3 className="ForecastDayOfWeek">
            Sat
          </h3>
          <p className="ForecastTemperature">
            24&#8451;
          </p>
        </div>
        <div className="col">
          <h3 className="ForecastDayOfWeek">
            Sun
          </h3>
          <p className="ForecastTemperature">
            24&#8451;
          </p>
        </div>
        <div className="col">
          <h3 className="ForecastDayOfWeek">
            Mon
          </h3>
          <p className="ForecastTemperature">
            24&#8451;
          </p>
        </div>
        <div className="col">
          <h3 className="ForecastDayOfWeek">
            Tue
          </h3>
          <p className="ForecastTemperature">
            24&#8451;
          </p>
        </div>
      </div>
    </div>
  </div>

    );
}