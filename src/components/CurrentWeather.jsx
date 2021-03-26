import React from 'react';
import '../styles/styleCurrentWeather.css';
import TimeConverter from '../functions/timeConverter'
import UrlConverter from '../functions/urlConverter';

const CurrentWeather = ({city, location}) => {    
    
    return(           
            <div className="current-weather-outer">
                <div className="current-weather-inner">
                    <h2>{city.name}</h2>
                    <p>{TimeConverter(location.current.dt)}</p>
                    <img src={UrlConverter(location.current.weather[0].icon)} alt="" />
                    <p>{location.current.temp + '°'}</p>
                    <p>{'Känns som ' + location.current.feels_like + '°'}</p>
                    
                </div>                
            </div>           
    );
}

//Testcomment

export default CurrentWeather;

