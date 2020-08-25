import React from "react";

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
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Practice Areas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
