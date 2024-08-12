import React from 'react'
import logo from '../logo.svg'

const Nav = () => {
  return (
    <nav className='header__nav flex justify-between items-center my-5'>
          <a href='#!' target='blank'>
            <img src={logo} alt="Here should be Nav Img"/>
          </a>
          <ul className='header__menu flex justify-between w-1/2'>
            <li className='menu-item'>
              <a href='#!'>Home</a>
            </li>
            <li className='menu-item'>
              <a href='#!'>Browse Menu</a>
            </li>
            <li className='menu-item'>
              <a href='#!'>Special Offers</a>
            </li>
            <li className='menu-item'>
              <a href='#!'>Restaurants</a>
            </li>
            <li className='menu-item'>
              <a href='#!'>Track Order</a>
            </li>
          </ul>
          <button className='header__button bg-black text-white px-7 py-3 rounded-3xl'>Login / SignUp</button>
        </nav>
  )
}

export default Nav