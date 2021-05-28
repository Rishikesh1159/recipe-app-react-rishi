import React from 'react'
import { Link } from 'react-router-dom'

// This is navigation bar component which stays on top on page for all 3 pages of the application
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-brown'>
      <div className='collapse navbar-collapse show ml-sm-5'>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            {/* This link routes us back to the home page of app */}
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
