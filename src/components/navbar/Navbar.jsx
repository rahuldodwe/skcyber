import React from 'react';
import './navbar.css';
import header_logo from '../../assets/logo.png'

const Navbar = () => {
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
				<img src={header_logo} />
			</div>

			<ul>
				<li className="active"><a href="#">Home</a></li>
				<li className=""><a href="govt.php">Govt-Jobs</a></li>
				<li className=""><a href="school.php">College Notification</a></li>
				<li className=""><a href="service.php">Our Services</a></li>
				<li className=""><a href="about.php">About Us</a></li>
			</ul>
		</nav>
	</div>
  )
}

export default Navbar
