import React, { useState } from "react";
import "./navbar.css";
import header_logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [homePage, setHomePage] = useState(true);
  const [aboutPage, setAboutPage] = useState(false);
  const [jobPage, setJobPage] = useState(false);
  const [collegePage, setCollegePage] = useState(false);
  const [servicePage, setServicePage] = useState(false);

  function onHomeActive() {
    setHomePage(true);
    setJobPage(false);
    setCollegePage(false);
    setServicePage(false);
    setAboutPage(false);
  }

  function onGovtActive() {
    setJobPage(true);
    setAboutPage(false);
    setHomePage(false);
    setCollegePage(false);
    setServicePage(false);
  }

  function onServiceActive() {
    setServicePage(true);
    setAboutPage(false);
    setHomePage(false);
    setJobPage(false);
    setCollegePage(false);
  }

  function onCollegeActive() {
    setCollegePage(true);
    setHomePage(false);
    setJobPage(false);
    setCollegePage(false);
    setServicePage(false);
  }

  function onAboutActive() {
    setAboutPage(true);
    setHomePage(false);
    setJobPage(false);
    setCollegePage(false);
    setServicePage(false);
  }

  return (
    <div className="main-bar sticky-top">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="logo-header">
          <Link to="/">
            <img src={header_logo} />
          </Link>
        </div>

        <ul>
          {/* <li className="active"><Link to="/">Home</Link></li> */}
          <li
            className={`${homePage ? "active" : ""}`}
            onClick={() => onHomeActive()}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${jobPage ? "active" : ""}`}
            onClick={() => onGovtActive()}
          >
            <Link to="/govt-jobs">Govt-Jobs</Link>
          </li>
          <li
            className={`${collegePage ? "active" : ""}`}
            onClick={() => onCollegeActive()}
          >
            <Link to="/college-notification">College Notification</Link>
          </li>
          <li
            className={`${servicePage ? "active" : ""}`}
            onClick={() => onServiceActive()}
          >
            <Link to="/our-services">Our Services</Link>
          </li>
          <li
            className={`${aboutPage ? "active" : ""}`}
            onClick={() => onAboutActive()}
          >
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
