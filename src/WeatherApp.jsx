import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    const[weatherInfo, setWeatherInfo] =useState({
        City:"KOLKATA",
        feelsLike: 24.84,
        temp:  25.5,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "Haze"

    })
    useEffect(()=>{
      document.title = `Weather-App`
    },[])
    let updateInfo = (newInfo)=>{
      setWeatherInfo(newInfo);

    }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Weather App by Anirban</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp