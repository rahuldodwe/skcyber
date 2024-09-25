import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AppLaypot = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default AppLaypot
