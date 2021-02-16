import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Today from "./components/Today";

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  };

  function isItRaining() {
    if (typeof weather == undefined){
      return "app";
    }
    else {
      if (weather.weather == undefined)
        return "app";
      else {
        if (weather.weather[0].main === "Rain")
          return "app rain";
      }
    }
    return "app";
  }

  return (
      <div className={isItRaining()}>
        <div className="wrapper">
          <Navbar search={search} query={query} setQuery={setQuery}/>
          { typeof weather.main != "undefined" ? (
            <div>
              <Today 
                city={weather.name} 
                country={weather.sys.country}
                temperature={weather.main.temp}
                highTemp={weather.main.temp_max}
                lowTemp={weather.main.temp_min}
                status={weather.weather[0].description}
              />
            </div>
          ): ('')}
        </div>
      </div>
  );
}

export default App;
