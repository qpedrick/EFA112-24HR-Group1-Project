import React, { useEffect, useState } from "react"




const OpenWeather = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const key = `37f21f442b6bb2448534b4c2e267c937`;
    const date = `2014-02-01`;
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus(`Geolocation is not supported by your broswer`);
        } else {
            setStatus(`Locating...`);
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus(`Unable to retrieve your location`);
            });
        }
    }
    const fetchCurrentWeather = () => {

        fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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
            <h1>OpenWeather API</h1>
            <p>Build out project here</p>
            <button onClick={fetchCurrentWeather}>fetch</button>
        </div>
    )

}
export default OpenWeather;