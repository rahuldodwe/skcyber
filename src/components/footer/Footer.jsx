import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="f-container">
        <div className="text-center p-3 text-white">
          © 2025 Copyright: 
          <Link to='/' className="text-white" href="">
            skcyber.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
