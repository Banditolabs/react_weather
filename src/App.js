import React from "react";
import "./styles.css";

import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";


export default function App() {
  const allWeatherData = weatherData.map((ele,index) => {
    return <WeatherForecast img={ele.img} conditions={ele.conditions} time={ele.time} key={index} />
  })
  return (
    <div className="App">
      {allWeatherData}
    </div>
  );
}
