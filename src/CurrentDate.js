import React from 'react';

export default function CurrentDate() {
    const now = new Date ();
    const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
  let currentDayOfWeek = days[now.getDay()];

let currentHours = now.getHours();
 if (currentHours< 10) {
        currentHours = `0${currentHours}`;
    }

let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`;
    }

    return (
      <div>
        <span>
          {currentDayOfWeek}
        </span>
        <span>
          &ensp;{currentHours} : {currentMinutes}
        </span>
      </div>

    );
}