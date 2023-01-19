/*API key = '9OyDJd4K3mQV7jlaO0tLvP1Gsibafxns1tMSrzab'*/

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const Nasa = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [image, setImage] = useState(null);
    const key = '9OyDJd4K3mQV7jlaO0tLvP1Gsibafxns1tMSrzab';
    const date = '2020-01-01';

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
                setImage(json.url);
                console.log(json.url)
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Nasa API</h1>
                <Button onClick={getLocation} variant="contained">Get Location</Button>
                <h2>Coordinates</h2>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lng && <p>Longitude: {lng}</p>}
                <h3>Image</h3>
                <Button onClick={() => getImage()} variant="contained">Get Image</Button>
                <div>
                    <img alt='Please get location first :)' src={image} height='250px' width='250px'></img>
                </div>
            </div>
        </div>
    )
};

export default Nasa;