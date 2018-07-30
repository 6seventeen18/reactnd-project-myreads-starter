import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelf: props.shelf
    }
  }

  updateBook = (e) => {
    var shelf = e.target.value

    this.setState({
      shelf: shelf
    }, () => {
      this.props.onChangeShelf(this.props, shelf)
    })
  }

  render() {
    const { title, authors, shelf, imageUrl, onChangeShelf } = this.props

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>

            <div className="book-shelf-changer">
              <select defaultValue={this.state.shelf} onChange={this.updateBook}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>

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
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}
