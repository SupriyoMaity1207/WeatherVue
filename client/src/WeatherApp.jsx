import React, { useEffect } from 'react';

const apikey = "86bf9d7970e9de0e1a6993d7cc732171";

function WeatherApp() {
    const [weatherData, setWeatherData] = React.useState({});
    const [city, setCity] = React.useState({
        citys:"",
    });

    const handlechange = (e) => {
        setCity({
            ...city,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const cityname = city.citys;
        fetchWeatherData(cityname);
    }

    const fetchWeatherData = async (cityname) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`);
            const data = await response.json();
            console.log(data); // Log the fetched weather data
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="citys" id="citys" onChange={handlechange} />
                <button type='submit'>Search</button> 
                <p>Temperature: {weatherData.main && weatherData.main.temp}</p>
            </form>
        </div>
    );
}

export default WeatherApp;
