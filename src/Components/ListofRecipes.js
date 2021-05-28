import React, { Component } from 'react'
import SingleRecipe from './SingleRecipe'

// This component is used to store list of recipes and
export default class ListofRecipes extends Component {
  render() {
    const { recipes } = this.props
    return (
      <>
        {/* few lines of code below are just used fot styling purpose */}
        <div className='container py-5'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
              <h1 className='textSlanted text-light'>Recipe List</h1>
            </div>
          </div>
          {/* This jsx code calls Single Recipe component for every element present in the recipe list (recipes) array */}
          <div className='row'>
            {recipes.map((recipe) => (
              <SingleRecipe key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </div>
      </>
    )
  }
}
