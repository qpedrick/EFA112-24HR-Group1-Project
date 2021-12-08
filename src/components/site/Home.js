const Home = () => {
    return(
        <div className = 'main'>
            <div className = 'mainDiv'>
                <h1>Welcome to our Group Project!</h1>
                <br/>
                <p>
                    To begin, allow location access on your device.
                </p>
                <p>
                    Select the NASA API from the sidebar to see an imagine rendered of your current location.
                </p>
                <p>
                    Select the Open Weather API to see current weather in your area in Fahrenheit and Celsius.
                </p>
                <p>
                    Select the TicketMaster API to display current events in your area.
                </p>
            </div>
        </div>
    );
};

export default Home;