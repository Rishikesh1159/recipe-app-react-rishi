import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// This is a stateless component which is called by ListofRecipes Component to display each individual recipe item and can be reused for each item in list
export default class SingleRecipe extends Component {
  render() {
    const { strMeal, strMealThumb, idMeal } = this.props.recipe
    return (
      <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
        <div className='card bg-brown' style={{ height: '100%' }}>
          {/* This is header it just shows image of the card */}
          <img
            src={strMealThumb}
            style={{ height: '14rem' }}
            className='img-card-top'
            alt='recipe'
          />
          {/* This is body of the card it has title of the recipe */}
          <div className='text-light card-body text-capitalize bg-yellow'>
            <h6>{strMeal}</h6>
          </div>
          <div
            className='card-footer text-center'
            style={{ background: 'rgba(0, 0, 0, 0.842)' }}
          >
            {/* This is footer and link to display 3rd page which is RecipeList which shows individual recipe details*/}
            <Link
              to={`/RecipeList/${idMeal}`}
              className='btn btn-primary text-capitalize'
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
