import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelf: this.props.shelf
    }
  }

  render() {
    const { title, authors, shelf, imageUrl } = this.props

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
            <BookShelfChanger shelf={this.state.shelf} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </div>
    )
  }
}

export default Book

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
