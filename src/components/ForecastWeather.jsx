import React from 'react';
import '../styles/styleForecastWeather.css';

const ForecastWeather = (props) => {
        
/*     let forecast = props.item.daily.map(day => {
        return(
            <div>
                <p>{timeConverter(day.dt)}</p>
                <p>{day.temp.min} / {day.temp.max}</p>
            </div>
        )
    }) */
    
    if(props.city.name == "")
    {
            return(
                <>
                </>
            )
    }           
    else
    {
        return(
            <>
                <div className="daily-forecast">{/* {forecast} */}</div>
            </>
        );

    }   
}

export default ForecastWeather;

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if(min < 10)
    {
        min = '0' + min;
    }
    var time = date + ' ' + month /* + ' ' + year + ' ' + hour + ':' + min  */;
    return time;
  }