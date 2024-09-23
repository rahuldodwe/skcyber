import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     
    </div>
  )
}

export default App
