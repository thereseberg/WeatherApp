import React from 'react';
import '../styles/styleCurrentWeather.css';

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
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
    return time;
  }

function urlConverter(iconName){
    let url = 'https://openweathermap.org/img/w/' + iconName + '.png';
    return url;
}

const CurrentWeather = (props) => {    
    
    if(props.city.name === "" || props.item.current === )
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
                <div className="current-weather">
                    <h2>{props.city.name}</h2>
                    <img src={urlConverter(props.item.current.weather[0].icon)} />
                    <p>{props.item.current.temp}</p>
                    <p>{timeConverter(props.item.current.dt)}</p>
                </div>           
            </>
        )
    }
}

export default CurrentWeather;

