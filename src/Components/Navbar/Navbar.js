import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className='NavContainer'>
          <div className='navCard'>
          <h1>The<span>Cocktail</span>DB</h1>
          <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/about' ><li>About</li></Link>
              </ul>
              </div>
    </div>
  )
}

export default Navbar