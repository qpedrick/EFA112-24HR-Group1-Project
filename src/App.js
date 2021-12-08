import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import Footer from './components/site/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Sidebar />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
