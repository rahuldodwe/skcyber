import React from 'react'
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/home-slider/Slider'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
