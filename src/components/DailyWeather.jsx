import React from 'react';
import '../styles/styleForecastWeather.css';
import UrlConverter from '../functions/urlConverter';
import GetWeekday from '../functions/getWeekday';
import GetDateMonth from '../functions/getDateMonth';

const DailyWeather = ({day}) => {
    return(
            <div className="forecast-daily">
                <h4>{GetWeekday(day.dt)}</h4>
                <p>{GetDateMonth(day.dt)}</p>
                <h4>{day.temp.max + '°'}</h4>
                <p>{day.temp.min + '° min'}</p>
                <img src={UrlConverter(day.weather[0].icon)} alt=""/>
            </div>
    );
}

export default DailyWeather;