import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Carousel from './components/Carousel';
import Parallax from './components/Parallax';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Practice_areas from './components/Practice_areas';
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';
import Practice from './components/Practice';
import About_us from './components/About_us';
import Contact_us from './components/Contact_us';

function App() {
  return (
    <Router>
      <div>
      

          <Route exact={true} path="/" component={Index} />
          <Route exact={true} path="/Practice" component={Practice} />
          <Route exact={true} path="/About_us" component={About_us} />
          <Route exact={true} path="/Contact_us" component={Contact_us} />

      </div>
    </Router>
  );
}

export default App;
