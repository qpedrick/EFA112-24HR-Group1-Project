import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const OpenWeather = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);;
    const [results, setResults] = useState(null);
    const key = `08d029604b596f179b40bb36b23a43c3`;
    //const altkey = '87fdda7a943f4b425d67f817af9cab46'

    const getLocation = () => {
        if (!navigator.geolocation) {
            console.log(`Geolocation is not supported by your broswer`);
        } else {
            console.log(`Locating...`);
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                console.log(lat);
                setLng(position.coords.longitude);
                console.log(lng);
            }, () => {
                console.log(`Unable to retrieve your location`);
            });
        }
    }
    const fetchCurrentWeather = () => {
        getLocation();
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`)
            .then(res => res.json())

    return (
        <div className='main'>
            <div className='mainDiv'></div>
            <h1>OpenWeather API</h1>
            {results ? <table>
                <thead>
                <tr>
                <th>Current Temp</th>
                <th>Current Feels-Like Temp</th>
                <th>Minimum Temp</th>
                <th>Maximum Temp</th>
                </tr>
                </thead>
                <td>{`${Math.round(results.temp-273.15)}°C`}</td>
                <td>{`${Math.round(results.feels_like-273.15)}°C`}</td>
                <td>{`${Math.round(results.temp_min-273.15)}°C`}</td>
                <td>{`${Math.round(results.temp_max-273.15)}°C`}</td>
                </table>: <div></div>}
            <Button onClick={fetchCurrentWeather} variant="contained">fetch</Button>
        </div>
    )
    }
}
export default OpenWeather;