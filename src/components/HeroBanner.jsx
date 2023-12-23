import React from 'react'
import  cadburylogo from '../assets/cadbury_logo.png'
import secondlogo from '../assets/secondlogo.png' 
import hamBurger from '../assets/hamburger.png' 
import './HeroBanner.css'      

export default function HeroBanner() {
  return (
    <div>
        <div className='banner'>
          <div className="PrimaryLogo">
            <img src={cadburylogo} alt="" />
          </div>
          <div className='secondarylogo'>
            <img src={secondlogo} alt="" />
            <img className='flex-item' src={hamBurger} alt="" />
          </div>
        </div> 
    </div>
  )
}
