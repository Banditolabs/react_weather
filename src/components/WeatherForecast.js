import React from 'react'
import Data from './Data'
import WeatherIcon from './WeatherIcon'

export default function (props) {
    return (
        <div className="weather">
            <WeatherIcon img={props.img} alt=""/>
            <Data conditions={props.conditions} time={props.time} />
      </div> 
      );}
