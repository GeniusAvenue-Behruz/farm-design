import React from 'react'
import Nav from './Nav.js'
import Hero from './Hero.js'
const Header = () => {
  return (
    <header>
      <div className='container mb-[50px]'>
        <Nav />
        <Hero />
      </div>
    </header>
  )
}

export default Header