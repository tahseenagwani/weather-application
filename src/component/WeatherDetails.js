import React, { useEffect, useState } from 'react'

function WeatherDetails(prop) {
    console.log(prop)
const [weatherState,setWeatherState]=useState("")

    let date =new Date(prop.newdata.sunset * 1000);
    let timestr=`${date.getHours()} : ${date.getMinutes()}`

   

    useEffect(()=>{
        if(prop.newdata.weatherType){
            switch(prop.newdata.weatherType){
                case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;

            }


        }

    },[prop.newdata.weatherType])
  return (
    <>
    <article className='widget'>
        <div className="weatherIcon">
        <i className={`wi ${weatherState}`}></i>
        </div>
    <div className="weatherInfo">
          <div className="temperature">
            <span>{prop.newdata.temp}&deg;</span>
        </div>
    <div className="description">
    <div className="weatherCondition">{prop.newdata.weatherType}</div>
        <div className="place">{prop.newdata.name},{prop.newdata.country}
    </div>
    </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className="extra-info-leftside">
                    {timestr} PM
                        <br/>
                        Time
                    </p>
                </div>
            
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className="extra-info-leftside">
                    {prop.newdata.humidity}
                      <br/>
                        Humiddity
                    </p>
                </div>
                </div>
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                    {prop.newdata.pressure}
                      <br/>
                        Pressure
                    </p>
                </div>
            
        
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className="extra-info-leftside">
                    {prop.newdata.speed}
                      <br/>
                        Speed
                    </p>
                </div>
            </div>
            

        </div>
    
    </article>
    
    
    </>
  )
}

export default WeatherDetails

