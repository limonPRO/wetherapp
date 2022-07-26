import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData]= useState({})
  const [location , setLocation]= useState('')
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&uints=imperial&appid=88a55673fae5198aabcc46d2e33f4b4d`
  
  const searchLoaction=(event)=>{
    if(event.key==="Enter"){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
      
  }
  return (
    <div className="app">
      <div className="search">
      <input
      value={location} 
      onChange={event=>setLocation(event.target.value)}
      onKeyPress={searchLoaction}
      placeholder="Enter location name"
      type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null }
            
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>:null}
            {/* <p>Clouds</p> */}
          </div>
        </div>


        {data.name !=undefined &&
         <div className="bottom">
         <div className="feels">
           {data.main?  <p className="bold">{data.main.feels_like.toFixed()}°F</p>:null }
           {/* <p className="bold">65°F</p> */}
           <p>Feels Like</p>
         </div>
         <div className="humanity">
         {data.main?  <p className="bold">{data.main.humidity}%</p>:null }
           {/* <p className="bold">20%</p> */}
           <p> Humadity</p>
         </div>
         <div className="wind">
         {data.wind?  <p className="bold">{data.wind.speed.toFixed()}MPH</p>:null }
           {/* <p className="bold">12MPH</p> */}
           <p>Wind Speed</p>
         </div>
       </div>
        }
       
      </div>
    </div>
  );
}

export default App;
