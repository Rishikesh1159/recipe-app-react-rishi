import React, { Component } from 'react'
import Search from '../Components/Search'
import ListofRecipes from '../Components/ListofRecipes'

// This component is 2nd page of the application, it stores entire page and also calls ListofRecipes Component which stores result of search
export default class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.getRecipes = this.getRecipes.bind(this)
  }
  state = {
    recipes: [],
    search: this.props.match.params.key,
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.props.match.params.key}`,
    baseUrl: `https://www.themealdb.com/api/json/v1/1/filter.php?i=`,
    error: '',
  }
  // Ajax call to the Meal DB API is done here
  async getRecipes() {
    try {
      const data = await fetch(this.state.url)
      const jsonData = await data.json()
      if (jsonData.meals === null) {
        this.setState({
          error:
            'Sorry there are no recipes with such Ingredient, Please try different Ingredient',
        })
      } else {
        this.setState({
          recipes: jsonData.meals,
          error: '',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getRecipes()
  }

  // Both handle change and handle submit functions are executed every time event is triggered

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { baseUrl, search } = this.state
    this.setState(
      {
        url: `${baseUrl}${search}`,
        search: '',
      },
      () => this.getRecipes()
    )
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {/* This is the call to Search component which has search bar */}
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>

        {/* This is a terinary operator if user entered search is valid then ListofRecipes component is executed, otherwise <Section> Below */}
        {this.state.error ? (
          <section>
            <div className='row'>
              <div className='col'>
                <h2
                  className='text-light text-center text-uppercase'
                  style={{ paddingTop: '5rem' }}
                >
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <ListofRecipes recipes={this.state.recipes}></ListofRecipes>
        )}
      </div>
    )
  }
}
