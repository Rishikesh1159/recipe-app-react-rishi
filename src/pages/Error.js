import React, { Component } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
// This page is executed when incorrect path is requested

export default class Error extends Component {
  render() {
    return (
      // Code below is just styling for showing error page output
      <Header title='Incorrect URL'>
        <h2 className='text-light text-uppercase'>Error 404 Page Not Found</h2>
        <Link
          to='/'
          className='text-uppercase
          btn
          btn-secondary
          btn-lg
          mt-3'
        >
          Back To Home Page
        </Link>
      </Header>
    )
  }
}
