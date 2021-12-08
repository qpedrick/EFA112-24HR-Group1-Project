/*API key = '9OyDJd4K3mQV7jlaO0tLvP1Gsibafxns1tMSrzab'*/

import React, {useState} from "react";

const Nasa = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const key = '9OyDJd4K3mQV7jlaO0tLvP1Gsibafxns1tMSrzab';
    const date = '2014-02-01';
    
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your broswer');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    const getImage = () => {
        fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lng}&lat=${lat}&date=${date}&api_key=${key}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        }
    

    return(
        <div className = 'main'>
            <div className = 'mainDiv'></div>
            <h1>Nasa API</h1>
            <button onClick = {getLocation}>GetLocation</button>
                <h2>Coordinates</h2>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lng && <p>Longitude: {lng}</p>}
                <h3>Image</h3>
                <button onClick={() => getImage()}>Get Image Console</button>
        </div>
    )
};

export default Nasa;