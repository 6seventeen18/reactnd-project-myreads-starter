import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookCase extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onChangeShelf } = this.props

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              <BookShelf key="currentlyReadingShelf"
                         shelfCategory="currentlyReading"
                         title="Currently Reading"
                         books={books}
                         onChangeShelf={onChangeShelf}
              />

              <BookShelf key="wantToReadShelf"
                         shelfCategory="wantToRead"
                         title="Want to Read"
                         books={books}
                         onChangeShelf={onChangeShelf}
              />

              <BookShelf key="readShelf"
                         shelfCategory="read"
                         title="Read"
                         books={books}
                         onChangeShelf={onChangeShelf}
              />
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
