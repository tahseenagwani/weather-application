import React, { useState } from 'react'
import './style.css'
import WeatherDetails from './WeatherDetails';

function SearchData() {
  const [searchTerm,setSearchTerm]=useState("mumbai");
  console.log(searchTerm);
  return (
    <>
    <div className="wrap">
      <div className="search">
        <input
          type="search"
          placeholder="Search city.."
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" >
          Search
        </button>
      </div>
    </div>
    <WeatherDetails/>
    </>
  )
}

export default SearchData