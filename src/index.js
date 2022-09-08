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
      
    
     
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Fri</h3>
              <p>Icon</p>
              <p>24&#8451;</p>
            </div>
            <div className="col">
              <h3>Sat</h3>
              <p>Icon</p>
              <p>24&#8451;</p>
            </div>
            <div className="col">
              <h3>Sun</h3>
              <p>Icon</p>
              <p>24&#8451;</p>
            </div>
            <div className="col">
              <h3>Mon</h3>
              <p>Icon</p>
              <p>24&#8451;</p>
            </div>
            <div className="col">
              <h3>Tue</h3>
              <p>Icon</p>
              <p>24&#8451;</p>
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
