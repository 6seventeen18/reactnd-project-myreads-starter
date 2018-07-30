import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelf: this.props.shelf
    }
  }

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select defaultValue={this.state.shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    )
  }
}

export default BookShelfChanger

BookShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired
}
