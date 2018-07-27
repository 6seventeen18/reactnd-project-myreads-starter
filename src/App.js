import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Mockup from './Mockup'
import BookCase from './BookCase'
import Search from './Search'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase />
        )}/>

        <Route exact path='/search' render={() => (
          <Search />
        )}/>

        <Route path='/mockup' component={Mockup}/>
      </div>
    )
  }
}

export default BooksApp
