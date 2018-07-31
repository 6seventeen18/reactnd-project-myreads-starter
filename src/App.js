import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Mockup from './Mockup'
import BookCase from './BookCase'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
    })
  }

  updateBook = (book, shelf) => {
    console.log("updateBook")
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>

        <Route exact path='/search' render={() => (
          <Search
            books={this.state.books}
            onChangeShelf={this.updateBook}
          />
        )}/>

        <Route path='/mockup' component={Mockup}/>
      </div>
    )
  }
}

export default BooksApp
