import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
  <>
  <Navbar />
  <Banner />
  <About />
  <Services />
  <Contact />
  </>
  )
}

export default App