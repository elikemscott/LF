import React from 'react';
import '../App.css'
import Navbar from './Navbar'
import Parallax from './Parallax'
import Footer from './Footer'
import Carousel from './Carousel'

export default function Index() {
    return (
        <div>
           <Navbar/>
           <Carousel/>
           <Parallax/>
           <Footer/> 
        </div>
    )
}
