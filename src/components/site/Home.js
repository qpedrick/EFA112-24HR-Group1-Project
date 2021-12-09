const Home = () => {
    function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    const getLoc = navigator.geolocation.getCurrentPosition(success, error);

    return(
        <div className = 'main'>
            <div className = 'mainDiv'>
                <h1>Welcome to our Group Project!</h1>
                <h2>{getLoc}</h2>
            </div>
        </div>
    );
};

export default Home;