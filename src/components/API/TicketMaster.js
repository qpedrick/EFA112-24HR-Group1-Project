import React, {useState, useEffect } from "react";


const TicketMaster = (props) => {
    const ticketmasterKey="ZHK3g0y7c68WdfkO6ZE1bKjVIhqcJxGg"
    const [search, setSearch] = useState('');
    const [results, setResults] = useState({})
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    
    const fetchEvents = () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmasterKey}&latlong=${lat},${lng}` // tried to add "https://cors-anywhere.herokuapp.com/" in front of the link

        fetch(url, { // CORS PROBLEM BUT SHOWS UP ON POST
            method: "GET",
            headers : new Headers({
                "Access-Control-Allow-Origin": "*",
                // "Host": "app.ticketmaster.com", //God pls this be it
                // "X-Target-URI": "https://app.ticketmaster.com",
                "Connection": "Keep-Alive",
                // "Accept-Encoding": "gzip,deflate,br"
            })
        })  
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setResults(data)
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
                <input 
                type="text"
                className="searchbar"
                placeholder="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <br />
                <br />
                
                <button onClick={() => getLocation()}>Get Location</button>
                <h2>Latitude & Longitude</h2>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lng}</p>

                <button onClick={() => fetchEvents()}>Get Events Near You</button>
                {results ? <p>{results.events}</p> : <div></div>}
            </div>
        </main>
    </div>
    )
};
    
export default TicketMaster;