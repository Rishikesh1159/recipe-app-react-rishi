import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Components/Search'
import { useState } from 'react'
// This is the landing 1st page of website, this has search bar
function Home() {
  const [search, setSearch] = useState('')
  function handleChange(e) {
    setSearch(e.target.value)
  }
  return (
    // Below Few lines of code is just used for styling the home page
    <div className='container-fluid header-hero'>
      <div className='row'>
        <div
          className='col-10 mx-auto col-md-8 mt-5 text-center'
          style={{ paddingTop: '15rem' }}
        >
          <h1 className='text-slanted text-capitalize text-light'>
            WELCOME TO {''}
            <strong style={{ color: 'yellow' }}>RECIPE APPLICATION</strong>
          </h1>
          <h1 className='text-slanted text-capitalize text-light'>
            Search Recipes with {''}
            <strong style={{ color: 'yellow' }}>Meal DB API</strong>
          </h1>
          <form className='mt-4'>
            <label
              htmlFor='search'
              className='text-capitalize'
              style={{ color: 'black' }}
            >
              Type Ingredient
            </label>
            <div className='input-group'>
              <input
                type='text'
                name='search'
                className='form-control'
                placeholder='Chicken_breast'
                value={search}
                onChange={handleChange}
              ></input>
              {/* This jsx code below calls send requested search value to 2nd page and display its output */}
              <Link to={`/RecipeLists/${search}`}>
                <button
                  type='submit'
                  className='input-group-text bg-primary text-white'
                  style={{ minHeight: '100%' }}
                >
                  <i className='fas fa-search'></i>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
