import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
            <h1 className='text-slanted text-capitalize text-light'>
              Search Recipes with {''}
              <strong style={{ color: 'rgb(83, 62, 3)' }}>Meal DB API</strong>
            </h1>
            <form className='mt-4'>
              <label htmlFor='search' className='text-capitalize'>
                Type Ingredients
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
                <Link
                  to={`/RecipeLists/${search}`}
                  className='btn btn-primary text-capitalize'
                >
                  <button
                    type='submit'
                    className='input-group-text bg-primary text-white'
                    onClick={handleSubmit}
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
}
