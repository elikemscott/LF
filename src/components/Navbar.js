import React from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="">
          <div class="bg-white py-2">
            <div class="container">
              <div className="nav">
                <ul class="nav justify-content-center  lighten-4 py-4">
                  <li class="">
                    <span class="badge">RC</span> &nbsp;{" "}
                    <span>Richard Chapman, ESQ</span> &nbsp; &nbsp;
                    <span>
                      <i class="fas fa-phone black-text nav_phone"></i> &nbsp;
                      00634568191
                    </span>{" "}
                    &nbsp;
                    <span className="nav-email">
                      <i class="far fa-envelope black-text nav_email"></i>{" "}
                      &nbsp;{" "}
                      <span className="mail">richardchapman@mail.com</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav
          id="navbar_top"
          class="navbar navbar-expand-lg navbar-light bg- nav_color"
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <Link to='/' class="nav-link" >
                  Home 
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/Practice' class="nav-link" >
                  Practice Areas
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/About_us' class="nav-link" >
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/Contact_us' class="nav-link " >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
