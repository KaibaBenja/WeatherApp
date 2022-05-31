import React, { useState } from 'react'
import { apiKey } from '../constanst';
import Form from './Form';
import Card from './Card';
import CityButton from './CityButton';

const WeatherPanel = () => {

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?&cnt=40&lang=es&units=metric&appid=${apiKey}`;
    let cityUrl = '&q=';
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?&lang=es&units=metric&appid=${apiKey}`;

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show,setShow] = useState(false);
    const[location, setLocation] = useState('');

    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

        //Weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then(res => {
            if(!res.ok) throw {res}
            return res.json()
        }).then(weatherData => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        })

        // Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then(res => {
            if(!res.ok) throw {res}
            return res.json()
        }).then(forecastData => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);
        
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        })

    }

    return(
        
        <React.Fragment>
            <Form 

                newLocation = {getLocation}

            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />

            <CityButton
                cityDefault={getLocation}
            />
        </React.Fragment>

        
    );
}

export default WeatherPanel