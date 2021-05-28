import React from 'react'
import { Link } from 'react-router-dom'
// This component is used by error page
export default function Header({ children, title, styleClass }) {
  return (
    // All the code below is just used for styling the error page
    <header>
      <div className='container'></div>
      <div className={`row align-items-center ${styleClass}`}>
        <div className='col text-center'>
          <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>
            {title}
          </h1>
          {children}
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'default title',
  styleClass: 'header-hero',
}
