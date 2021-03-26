import React from 'react';
import '../styles/styleForecastWeather.css';
import DailyWeather from './DailyWeather';

const ForecastWeather = ({city, location}) => {
       
    let weatherList = location.daily.map((day, index) => {
        if(index > 0 && index <6){
            return(<DailyWeather day={day} />)
        }
    })

    return(
        <div className="forecast-outer-div">
            {weatherList}   
        </div>       
    );
      
}

export default ForecastWeather;
