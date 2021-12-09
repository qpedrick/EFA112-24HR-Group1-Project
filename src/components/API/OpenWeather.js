

import React, { useState } from "react"

const OpenWeather = props => {
    const [sky, setSky] = useState([]);
    const [temp, setTemp] = useState([]);
    const [tempMin, setTempMin] = useState([]);
    const [tempMax, setTempMax] = useState([]);
    const [feelsLike, setFeelsLike] = useState([]);
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
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}}&lon=${lng}&appid=${key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setSky(json.weather[0].description)
                setTemp(json.main.temp)
                setFeelsLike(json.main.feels_like)
                setTempMin(json.main.temp_min)
                setTempMax(json.main.temp_max)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='main'>
            <div className='mainDiv'></div>
            <button onClick={() => fetchCurrentWeather()}>See your current local weather</button>
            {tempMax ? <table>
                <thead>
                    <tr>
                        <th>Sky</th>
                        <th>Temp</th>
                        <th>Feels like</th>
                        <th>Temp Min</th>
                        <th>Temp Max</th>
                    </tr>
                </thead>
                <tr>
                    <td>{sky}</td>
                    <td>{temp}</td>
                    <td>{feelsLike}</td>
                    <td>{tempMin}</td>
                    <td>{tempMax}</td>
                </tr>
            </table> : <div></div>}
        </div >

    )
}

export default OpenWeather;