import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
// import Cold from "./cold.jpg"
function InfoBox({info}) {
  const URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // const cold_URL ="https://images.unsplash.com/photo-1534324482290-e147f564f5b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_URL = "./cold.jpg";
    // const hot_URL = "https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_URL = "./hot.jpg";
    // const rain_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_URL = "./rain.jpg";
  return (
    <div className='InfoBox'>
        
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? rain_URL  : info.temp>15 ? hot_URL : cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
          {info.humidity>80 ? <ThunderstormSharpIcon/>  : info.temp>15 ? <WbSunnySharpIcon/> : <AcUnitSharpIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p> Temparature = {info.temp}&deg;C</p>  
        <p>Humidity = {info.humidity}&#x25;;</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <u>{info.weather}</u> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}

export default InfoBox