import React, {useState, useEffect } from "react";


    



const TicketMaster = (props) => {
    const ticketmasterKey="ZHK3g0y7c68WdfkO6ZE1bKjVIhqcJxGg"
    const [search, setSearch] = useState('');
    const [results, setResults] = useState({})
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    
    const fetchEvents = () => {
        let url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZHK3g0y7c68WdfkO6ZE1bKjVIhqcJxGg"

        fetch(url, {
            method: "GET",
            headers : new Headers({
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin": "*",
            })
        })  
        .then(res => res.json())
        .then(data => setResults(data))
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
                <input 
                type="text"
                className="searchbar"
                placeholder="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <button onClick={() => getLocation()}>Get Location</button>
                <button onClick={() => fetchEvents()}>Click for Event</button>
            </div>
        </main>
    </div>
    )
};
    
export default TicketMaster;