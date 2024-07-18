import React from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import './index.css'
import Hero from './Components/Hero/Hero.js'
import About from './Components/About/About.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
    </div>
  )
}

export default App
