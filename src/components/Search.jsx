import React, {useState, useRef, useEffect} from 'react';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import MissingData from './MissingData';
import '../styles/styleSearch.css';

const Search = () => {
    
    const currentCity = useRef("");
    const[location, setLocation] = useState();
    const [city, setCity] = useState();

    const canShowWeather = city !== undefined && location !== undefined && city.coord !== undefined;


    useEffect( () => {
        setFirstPage();
    }, []);

    const setFirstPage = async () => {
        const city = await apiWeather('Stockholm');
        setCity(city);
        console.log(city);
        
        const location = await apiOneCall(city.coord.lon, city.coord.lat);
        setLocation(location);
    }

    const handleSearch = async () => {
        const city = await apiWeather(currentCity.current.value);
        setCity(city);

        if(city.coord !== undefined)
        {
            const location = await apiOneCall(city.coord.lon, city.coord.lat);
            setLocation(location);
        }
    }

    let weatherElement;
    let forecastElement;
    let missingDataElement;

    if(canShowWeather)
    {
        weatherElement = (
            <CurrentWeather location={location} city={city} />
        );

        forecastElement = (
            <ForecastWeather location={location} city={city} />
        );

    }
    else
    {
        missingDataElement = (
            <MissingData input={currentCity.current.value} />
        )
    }

    return(
        <>
            <div className="search-bar">
                <label>Skriv in en stad</label>
                <br/>
                <input type="text" ref={currentCity} />
                <button onClick={handleSearch}>Sök</button>
                
            </div>         
            {weatherElement}
            {forecastElement}
            {missingDataElement}
        </>
    );   
}

async function apiWeather (city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sv&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
    const response = await fetch(url);
    return await response.json();
}

async function apiOneCall (longitud, latitud) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    const response = await fetch(url);
    return response.json();
}

export default Search;

