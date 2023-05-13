import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherDetails from './WeatherDetails';

function SearchData() {
  const [searchTerm,setSearchTerm]=useState("mumbai");
  const [tempInfo,settempInfo]=useState({})
 const getWeatherInfo=async()=>{

  try{
   let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=694eaed0982de1ea8f9ad988e99fbee7`;
  let res=await fetch(url)
  let data=await res.json()
  console.log(data)
  const{temp,pressure,humidity}=data.main;
  const {main:weatherType}=data.weather[0]
  const {name}=data;
  const {speed}=data.wind
const {country,sunset}=data.sys

let myNewWeatherInfo={
temp,
humidity,
pressure,
weatherType,
name,
speed,
country,
sunset

}
settempInfo(myNewWeatherInfo);
  console.log(weatherType);
  }
  catch(error){
    console.log(error)
  }

}
//`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}}&appid=694eaed0982de1ea8f9ad988e99fbee7`
useEffect(()=>{
getWeatherInfo()


},[]) 
 
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
        <button className="searchButton" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
    </div>
    <WeatherDetails newdata={tempInfo}/>
    </>
  )
}

export default SearchData