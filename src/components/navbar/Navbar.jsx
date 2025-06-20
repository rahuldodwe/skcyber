import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import header_logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Govt-Jobs", path: "/govt-jobs" },
    { name: "College Notification", path: "/college-notification" },
    { name: "Our Services", path: "/our-services" },
    { name: "About Us", path: "/about-us" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="main-bar sticky-top">
      <nav>
        <input
          type="checkbox"
          id="check"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="check" className="checkbtn">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="logo-header">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={header_logo} alt="Logo" />
          </Link>
        </div>

        <ul className={menuOpen ? "nav-open" : ""}>
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
