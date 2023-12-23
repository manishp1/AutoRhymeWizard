import React from 'react'
import './HomePage.css'
import cadImage from '../assets/celebrations.png'

export default function HomePage() {
  return (
    <div className="App">
      <div className='cadbory-image'>
          <img src = {cadImage} alt='' />
         <div className='text-content'>
            <h2>A unique birthday song for everyOne!</h2>
            <p>इस birthday, कुछ अच्छा हो जाए और कुछ मीठा हो जाए।</p>
         </div>
      </div>
    </div>
  )
}
