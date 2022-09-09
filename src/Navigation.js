import React from 'react';
import './css/Navigation.css';

export default function Navigation() {
    return (
        <ul className="Navigation">
            <li className="NavigationCities">
              Kyiv
            </li>
            <li className="NavigationCities">
              Lisbon
            </li>
            <li className="NavigationCities">
              Paris
            </li>
            <li className="NavigationCities">
              San Francisco
            </li>
      </ul>
    );
}