import React from "react";
import '../App.css'

function Footer() {
  return (
    <div>
      <div className="footer">
        <h6 className="footer_header">Truth & Justice</h6>
        <hr className="footer_icon_hr"></hr>
        <ul class="footer_icons">
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <hr className="footer_icon_hr"></hr> <br /> <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mobile-footer-esq">
              {" "}
              <h6>RICHARD CHAPMAN, ESQ</h6> <br />{" "}
              <p className="rc_font">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi non quis exercitationem culpa nesciunt nihil aut
                nostrum explicabo reprehenderit optio amet ab temporibus
                asperiores quasi cupiditate. Voluptatum ducimus voluptates
                voluptas?{" "}
              </p>
              <br /> <br />{" "}
              <a>
                Learn more about our Practice{" "}
                <i class="fas fa-angle-double-right fa-xs"></i>{" "}
              </a>
            </div>
            <div className="col-0 col-md-4 ">
              <h6>CONTACT DETAILS</h6>
              <hr className="contact_hr"></hr>
              <hr className="contact_hr_sub"></hr>
              <div className="contact_font">
                <span>
                  <i class="fas fa-mobile-alt fa-xs"></i> &nbsp;Mobile: &nbsp;
                  00634568191
                </span>{" "}
                <br /> <br />
                <span>
                  <i class="fas fa-phone"></i> &nbsp;Telephone: &nbsp;
                  00634568191
                </span>{" "}
                <br /> <br />
                <span>
                  <i class="far fa-envelope"></i> &nbsp; Email: &nbsp;
                  richardchapman@mail.com
                </span>{" "}
                <br /> <br />
                <span>20 Commerce Dr, Cranford, NJ 07016, USA</span>
              </div>
            </div>
            <div className=" col-0 col-md-2 ">
              <h6>TERMS OF SERVICE</h6>
              <hr className="terms_hr"></hr>
              <hr className="terms_hr_sub"></hr>
              <div className="terms_font">
                <a>Disclaimer</a> <br />
                <hr className="disclaimer_hr"></hr>
                <a>Privacy Policy</a> <br />
                <hr className="policy_hr"></hr>
                <a>Terms & Conditions</a>
              </div>
            </div>

            <div className="col-0 col-md-2 ">
              <h6>OVERVIEW</h6>
              <hr className="overview_hr"></hr>
              <hr className="overview_hr_sub"></hr>
              <div className="overview_font">
                <a>About Practice</a> <br />
                <hr className="disclaimer_hr"></hr>
                <a>Clients</a> <br />
                <hr className="policy_hr"></hr>
                <a>Testimonies</a>
              </div>
            </div>
          </div>{" "}
          <br /> <br />
          <p className='copyright'>Richard Chapman, &copy;2020. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
