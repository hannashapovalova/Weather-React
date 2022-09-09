import React from 'react';
import './css/Search.css';

export default function Search() {
    return (
      <form className="SearchForm" onSubmit={handSubmit}>
        <input type="search" placeholder="Enter a city" className="SearchInput" onChange={updateCity}>
        </input>
        <input type="submit" value="Search" className="SeacrhButton">
        </input>
      </form>
    );
}