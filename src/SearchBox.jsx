import React from 'react'
import './searchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{useState} from 'react'
import { red } from '@mui/material/colors';
function SearchBox({updateInfo}) {
    let[city,setCity] = useState("");
    let[error, setError]= useState(false);
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const Key = "eac7da0c3eafd7d4d9c7db17bee9697d";
    let getWeatherInfo = async()=>{
        try{
        let response = await fetch(`${URL}?q=${city}&appid=${Key}&units=metric&lang=hi`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        
        let result ={
            City: city,
            name: jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
        
        }catch(err){
           throw err
            
           
    

        }
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
        
    }
    let handleFormSubmit = async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let newInfo =await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        }catch(error){
            setError(true);


        }
    }
  return (
    <div className='SearchBox'>
    
        
        <form onSubmit={handleFormSubmit}>
        
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
        <br></br> <br></br>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color: 'red'}}>No such Place exists</p>}


        
        </form>
        </div>
  )
}

export default SearchBox
