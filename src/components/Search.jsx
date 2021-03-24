import React, {useState, useRef} from 'react';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

const Search = () => {
    
    const currentCity = useRef();

    const[location, setLocation] = useState({
        coord: "",
        name: ""
    })

    const [city, setCity] = useState({       
        current: "",
        daily: ""
    });

    const getLocationItem = () => {
        let city = currentCity.current.value;

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sv&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`;

        try{
            fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log('Fetch coordinates');
                setLocation(json);
                getCityItem(json);
            })
        }
        catch(error){
            console.error(error);
        }
       
    }


 
    const getCityItem = (weatherObject) => {
        let longitud = weatherObject.coord.lon;
        let latitud = weatherObject.coord.lat;
        
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log('Fetch city weather data');
            setCity(json);            
        })

    }

    return(
        <>
            {console.log('Rendering data')}
            <label>Skriv in en stad</label>
            <br/>
            <input type="text" ref={currentCity} />
            <button onClick={getLocationItem}>Sök</button>
            <CurrentWeather item={city} city={location} />
            {/* <ForecastWeather item={cityItem} city={locationItem}/> */}
        </>
    );
    
}

export default Search;