import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import CtaOne from './sections/CtaOne'
import Packages from './sections/Packages'
import Footer from './sections/Footer'

function App() {
  return (
    <div className='text-5xl text-red-600 font-fakhwang'>
      <>
      
      <Header />
      <Hero />
      <About />
      <Services />
      <CtaOne />
      <Packages />
      <Footer />
      </>
    </div>
  )
}

export default App