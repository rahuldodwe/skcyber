import React from 'react';
import './heading.css';

const Heading = ({ text, className = "" }) => {
  return (
    <div className={`heading-container ${className}`}>
      <center>
        <h1 className="color-line">{text}</h1>
      </center>
    </div>
  );
};

export default Heading;
