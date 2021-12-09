import React, {useState } from "react";


const TicketMaster = (props) => {
    const key="74xIzrOtGvA3vu7LEzlUYC2c8ZjN91jt"
    const [search, setSearch] = useState('');
    const [results, setResults] = useState({})
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    
    const fetchEvents = () => {
    
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&latlong=${lat},${lng}` 
        
        fetch(url) 
        .then(res => res.json())
        .then(data => setResults(results))
        .catch(err => console.log(err))
    }
    

    const getLocation = () => {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your broswer");
        } else {
            console.log("Locating");
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                console.log("Unable to retrieve your location");
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
                <h2>Latitude and Longitude</h2>
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