import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  render() {
    const { title, author, shelf, imageUrl } = this.props

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </div>
    )
  }
}

export default Book

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
