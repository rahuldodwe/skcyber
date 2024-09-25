import React, { useState } from 'react';
import './navbar.css';
import header_logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

	const [homePage, setHomePage] = useState(false);

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
				<Link to="/" ><img src={header_logo} /></Link>
			</div>

			<ul>
				{/* <li className="active"><Link to="/">Home</Link></li> */}
				<li className=''><Link to="/">Home</Link></li>
				<li className=""><Link to="/govt-jobs">Govt-Jobs</Link></li>
				<li className=""><Link to="/college-notification">College Notification</Link></li>
				<li className=""><Link to="/our-services">Our Services</Link></li>
				<li className=""><Link to="/about-us">About Us</Link></li>
			</ul>
		</nav>
	</div>
  )
}

export default Navbar
