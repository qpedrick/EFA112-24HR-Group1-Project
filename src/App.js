import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import Footer from './components/site/Footer';

import Nasa from './components/API/Nasa';
import OpenWeather from './components/API/OpenWeather';
import TicketMaster from './components/API/TicketMaster';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c57b57',
    },
    neutral: {
      contrastText: '#fff',
    },
  },
});



function App() {

  
  return (
    <ThemeProvider className="App" theme={theme}>
        <Header />
          <Router>
            <Sidebar />
          </Router>
    </ThemeProvider>
  );
}

export default App;
