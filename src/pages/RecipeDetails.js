import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class recipeDetails extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    this.state = {
      recipe: {},
      id,
      loading: true,
    }
  }

  async componentDidMount() {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.state.id}`
    try {
      const response = await fetch(url)
      const responseData = await response.json()
      this.setState({
        recipe: responseData.meals[0],
        loading: false,
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const {
      strMeal,
      strMealThumb,
      idMeal,
      strInstructions,
      strYoutube,
      strCategory,
    } = this.state.recipe
    const {
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
    } = this.state.recipe
    const strIngredients1 = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
    ]
    const strIngredients = []
    for (let i = 1; i <= 20; i++) {
      if (strIngredients1[i]) {
        strIngredients[i] = strIngredients1[i]
      }
    }
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-center'>
                loading recipe ....
              </h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div
        className='container my-6'
        style={{ paddingBottom: '5rem', minheight: '2000px' }}
      >
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={strMealThumb}
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alt='recipe'
            ></img>
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h3 className='text-uppercase' style={{ fontWeight: 'bold' }}>
              {strMeal}
            </h3>
            <h3 className='text-warning text-capitalize text-slanted'>
              Category:{strCategory}
            </h3>
            <h3 className='text-warning text-capitalize text-slanted'>
              Instructions:
            </h3>
            <h5 className='text-capitalize' style={{ fontWeight: 'bold' }}>
              {strInstructions}
            </h5>
            {{ strYoutube } ? (
              <a
                href={strYoutube}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mt-2 text-capitalize'
              >
                {' '}
                Watch On Youtube{' '}
              </a>
            ) : (
              <div />
            )}
          </div>
          <ul className='list-group mt-4'>
            <h2 className='mt-3 mb-2'> Ingredients</h2>
            {strIngredients.map((item, index) => {
              return (
                <li
                  key={index}
                  className='list-group-item'
                  style={{ background: '#C7C7C7' }}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
