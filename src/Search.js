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
    this.setState({ query: query })

    if(query.trim())
      BooksAPI.search(query.trim()).then((books) => {
        this.setState({ books: books })
      })
    else
      this.setState({ books: [] })
  }

  render() {
    const { books, onChangeShelf } = this.props
    const { query } = this.state

    let displayedBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      displayedBooks = books.filter(
        (book) => match.test(book.title) || match.test(book.authors.join())
      )
    } else {
      displayedBooks = []
    }

    displayedBooks.sort(sortBy('title'))

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
              {displayedBooks.map((book) => (
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
