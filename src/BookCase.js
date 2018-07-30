import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookCase extends Component {
  /* TODO: Ask if there is a preference between defining propTypes
           this way vs after the class with ClassName.propTypes */
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    const currentlyReadingBooks = books.filter((book) => book.shelf === 'currentlyReading')
    const wantToReadBooks = books.filter((book) => book.shelf === 'wantToRead')
    const readBooks = books.filter((book) => book.shelf === 'read')

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              <BookShelf key="currentlyReadingShelf" title="Currently Reading" books={currentlyReadingBooks} />
              <BookShelf key="wantToReadShelf" title="Want to Read" books={wantToReadBooks} />
              <BookShelf key="readShelf" title="Read" books={readBooks} />
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookCase
