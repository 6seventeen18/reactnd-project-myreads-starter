import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { title, books } = this.props

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li>
                  <Book
                    key={book.id}
                    author={book.authors[0]}
                    shelf={book.shelf}
                    title={book.title}
                    imageUrl={book.imageLinks.thumbnail}
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

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf
