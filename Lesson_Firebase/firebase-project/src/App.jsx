import { useState } from 'react'
import './App.css'
import Cars from './Components/Cars.jsx'
import AddNewCar from './Components/AddNewCar.jsx'

function App() {

  return (
    <>
      <div style={{ float: 'left' }}>
        <AddNewCar></AddNewCar>
      </div>
      <div style={{ float: 'right' }}>
        <Cars></Cars>
      </div>
    </>
  )
}

export default App
