import React from 'react';
import './css/bootstrap.min.css';
import './css/index.css'
import Navigation from './Navigation';
import Search from './Search';
import Geolocation from './Geolocation';
import Footer from './Footer';
import Forecast from './Forecast';
import Weather from './Weather';


export default function App() {

        return (
            <div>
                <main>
               <Navigation />
               <div className="SearchBlock">
               <Search />
               <Geolocation />
               </div>
               <Weather />
               <Forecast />
               </main>
               <Footer />
            </div>

        );
    }