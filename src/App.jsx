import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'

import Services from './components/Services'
import Navbar from './components/Navbar'
import Gallary from './components/Gallary'
import Contact from './components/Contact'

export default function App() {
  return (
    <>

    <Navbar/>
     <Hero/>
     {/* <hr /> */}
     <Gallary/>
     <Services/>

     <Contact/>
    <Footer/>
     
    </>
  )
}
