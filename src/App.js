import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Error from './pages/Error'
import RecipeList from './pages/RecipeList'
import RecipeDetails from './pages/RecipeDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
class App extends Component {
  render() {
    return (
      <Router>
        <main className='bg-grey' style={{ minHeight: '1000px' }}>
          <Navbar />
          {/* Route in a react router is a path to component. Below are the paths to three pages in this peojects and an error component for incoorect path */}

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/RecipeLists/:key' exact component={RecipeList} />
            <Route path='/RecipeList/:id' exact component={RecipeDetails} />
            <Route component={Error} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App
