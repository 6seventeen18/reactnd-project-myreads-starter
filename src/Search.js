import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query})

    if(query)
      BooksAPI.search(query).then((books) => {
        this.setState({ books: books })
        console.log("books set to [" + books + "]")
      })
    else
      this.setState({ books: [] })
      console.log("books set to []")
  }

  render() {
    const { onChangeShelf } = this.props
    const { query, books } = this.state

    books.sort(sortBy('title'))

    return (
      <div>

        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    id={book.id}
                    authors={book.authors.join()}
                    shelf={book.shelf}
                    title={book.title}
                    imageUrl={book.imageLinks.thumbnail}
                    onChangeShelf={onChangeShelf}
                    book={book}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    )
  }
}

Search.propTypes = {
  onChangeShelf: PropTypes.func.isRequired
}

export default Search
