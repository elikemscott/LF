import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
