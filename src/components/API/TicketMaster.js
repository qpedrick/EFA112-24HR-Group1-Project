import React, {useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Button, TextField, Link } from '@mui/material/';


const TicketMaster = (props) => {
    const ticketmasterKey="hKAMgR5YeiSPjplmgrpwTuMTCQp63O46"
    const [search, setSearch] = useState('');
    const [results, setResults] = useState({})
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [extraResult, setExtraResults] = useState({});
    

    const fetchEvents = () => {
        let url = `https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmasterKey}&latlong=${lat},${lng}` // tried to add "https://cors-anywhere.herokuapp.com/" in front of the link
        
        fetch(url, { // CORS PROBLEM BUT SHOWS UP ON POST
            method: "GET",
            headers : new Headers({
                "Access-Control-Allow-Origin": "*",
                // "Host": "app.ticketmaster.com", //God pls this be it
                // "X-Target-URI": "https://app.ticketmaster.com",
                "Connection": "Keep-Alive",
                // "Accept-Encoding": "gzip,deflate,br",
            })
        })  
        .then(res => res.json())
        .then(data => {
            console.log(data._embedded.events[1])
            setResults(data._embedded.events[1])
            setExtraResults(data._embedded.events[2])
        })
        .catch(err => console.log(err))
    }

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by your broswer");
        } else {
            setStatus("Locating");
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus("Unable to retrieve your location");
            });
        }
    }


return(
    <div className = 'main'>
        <main>
            <div className="searchbox">
                <h2>TicketMaster Events</h2>
                <TextField id="filled-basic" className="searchbar" label="Search" variant="filled"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <br />
                <br />
                <a href="https://cors-anywhere.herokuapp.com/" target="_blank">
                <Button variant="contained">Access CORS</Button></a>
                <br />
                <br />
                <Button onClick={() => getLocation()} variant="contained">Get Location</Button>
                <h2>
                <br />
                Latitude & Longitude</h2>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lng}</p>
                <p>{status}</p>
                <br />
                <Button onClick={() => fetchEvents()} variant="contained">Get Events Near You</Button>
                <p>
                    {results.name}
                    <br/>
                    <Link href = {results.url} color="secondary" rel = 'noreferrer' target = '_blank'>{results.url}</Link>
                    <br />
                </p>
                <p>
                    {extraResult.name}
                    <br/>
                    <Link href = {extraResult.url} color="secondary" rel = 'noreferrer' target = '_blank'>{extraResult.url}</Link>
                    <br />
                </p>
                
            </div>
        </main>
    </div>
    )
};

    
export default TicketMaster;
