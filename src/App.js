import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Parallax from './components/Parallax';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Parallax/>
      <Footer/>
    </div>
  );
}

export default App;
