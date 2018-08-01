import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { title, books, onChangeShelf } = this.props
    const booksForShelf = books.filter((book) => book.shelf === this.props.shelfCategory)

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksForShelf.map((book) => (
                <li key={book.id}>
                  <Book
                    onChangeShelf={onChangeShelf}
                    book={book}
                    books={books}
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
  books: PropTypes.array.isRequired,
  shelfCategory: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf
