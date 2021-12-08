import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Nasa from '../API/Nasa';
import OpenWeather from '../API/OpenWeather';
import TicketMaster from '../API/TicketMaster';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/nasa'>NASA API</Link></li>
                    <li><Link to = '/openweather'>Open Weather API</Link></li>
                    <li><Link to = '/ticketmaster'>TicketMaster API</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path = '/'><Home /></Route>
                    <Route exact path = '/nasa'><Nasa /></Route>
                    <Route exact path = '/openweather'><OpenWeather /></Route>
                    <Route exact path = '/ticketmaster'><TicketMaster /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;