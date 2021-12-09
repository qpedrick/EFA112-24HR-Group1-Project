import React, { useEffect, useState } from "react"

const OpenWeather = () => {
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

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
        }
    

    /*const fetchCurrentWeather = () => {
        let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",

            })
        })
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchCurrentWeather()
        console.log(weather);
    })*/


    return (
        <div className='main'>
            <div className='mainDiv'></div>
            <button onClick = {getLocation}>Get Location </button>
            <h1>OpenWeather API</h1>
            <p>Build out project here</p>
            <button onClick={fetchCurrentWeather}>fetch</button>
        </div>
    )
    }
    
export default OpenWeather;