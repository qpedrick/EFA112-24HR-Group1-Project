
import React, { useState } from "react"

const OpenWeather = props => {
    const [weather, setWeather] = useState({
    });
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const key = `08d029604b596f179b40bb36b23a43c3`;
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
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${25}&lon=${85}&appid=${key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setWeather(json)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='main'>
            <div className='mainDiv'></div>

            <button onClick={fetchCurrentWeather()}>Get Weather near me.</button>
            <table>
                <thead>
                    <tr>
                        <th>Sky</th>
                        <th>Temp</th>
                        <th>Feels like</th>
                        <th>Temp Min</th>
                        <th>Temp Max</th>
                        <th>WindSpeed</th>
                    </tr>
                </thead>
                <tr>
                    <td>{weather.main.temp}</td>
                    <td>{weather.main.temp}</td>
                    <td>{weather.main.temp}</td>
                    <td>{weather.main.temp}</td>
                    <td>{weather.main.temp}</td>
                    <td>{weather.main.temp}</td>
                </tr>
            </table>
        </div >

    )
}

export default OpenWeather;