import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookShelf extends Component {
  render() {
    const { title } = this.props

    return (

      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf

/* TODO this is not working */
BookShelf.propTypes = {
  title: PropTypes.string.isRequired
}
