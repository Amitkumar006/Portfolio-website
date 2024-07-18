import React from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import './index.css'
import Hero from './Components/Hero/Hero.js'
import About from './Components/About/About.js'
import Services from './Components/Services/Services.js'
import MyWork from './Components/MyWork/MyWork.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App
