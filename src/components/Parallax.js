import React from 'react';
import {useEffect, useState} from 'react';

 

export default function App() {
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      function handleScroll() {
        setOffset(window.pageYOffset);
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [offset]);
  
    return (
      <div className="App">
          <div className="section_imag">
              <div className="profile">  I am delighted to welcome you to my personal website. My nearly 15 years of
           professional legal practice is solid testimony to my resilienceas an individual
            as well as the overwhelming confidence that my numerous clientshave placed in me 
            over the years.Come and share in that rich experience, as i lift the veil a little 
            on my operations,backed by a wonderful crop of very dedicated, hard-working and intrepid 
            partners,fuelled by the love of client satisfaction across numerous legal fields.Richard Chapman, ESQ.</div>
        
              
          </div>
        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1457694716743-eb419114c894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="test"
            className="parallax"
            style={{
              transform: `translateY(${offset * 0.3}px)`
            }}
          />
          <div className="text-wrapper">
            <h1 className="headline"></h1>
            <h2 className="sub-headline"></h2>
          </div>
        </section>
        <p className="Practice_areas">Practice Areas</p>
      <span className="line1"></span> <span class="dot1"></span>
      <span class="dot2"></span> <span className="line2"></span>
      <div class="flex-container">
        <div>
          <hr className="investment_law_hr"></hr>INVESTMENT LAW <br /> <br />
          <p>
            As one of the lawyers actng as legal consultants to the Divesiture
            Implementaion Commitee in America, I have assisted in the
            structuring and accelerated diversiture of Government interest in
            state-owned enterprises
          </p>
        </div>

        <div className="taxation">
          
          <hr></hr>TAXATION
        </div>
        <div>
          <hr></hr>ADMINISTRATION OF ESTATE AND PROBATE
        </div>
        <div>
          <hr></hr>PRIVITASATION AND DIVERSITURE
        </div>
      </div> 
      
        {/* Make space to scroll */}
        <section className="overflow" />
        <h4 className="mission">Mission</h4>
        <hr className="mission_hr"></hr>
        <hr className="mission_hr_sub"></hr>
       <ul className="mission_li">
           <li> Deliver professional services at the highest levels of competence.</li> 
           <li>Share strong insights into the intricacies of commercial and corporate practice in the U.S.A.</li>
           <li>Respond rapidly and effectively to the needs of clients. </li>
           <li>Show sensitivity to the needs of clients.</li>
           <li>Unravel the complexities of America’s legal and regulatory framework for thebenefit of investors, and</li>
           <li>Maintain the utmost confidentiality with respect to clients’ information.</li>
       </ul>
      </div>
    );
  }