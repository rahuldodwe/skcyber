import React from 'react';
import './home.css';
import Slider from '../../components/home-slider/Slider';

const Home = () => {
  return (
    <div className='slider-bg'>
        <Slider/>  
        <center>
			<h1 class="color-line">Welcome To SK-Cyber</h1>
		</center>
    </div>
  )
}

export default Home
