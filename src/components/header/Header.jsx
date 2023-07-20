import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/p_logo.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <nav
        class="navbar navbar-expand-lg color ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div class="container">
          <Link to="/">
            <img src={logo} width="100" height="100" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="services" class="nav-link">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to="work" class="nav-link">
                  Work
                </Link>
              </li>
              <li class="nav-item">
                <Link to="contact" class="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
