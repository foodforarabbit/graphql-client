import React, { Component } from 'react';
import BookData from '../../components/BookData';
class BookPage extends Component {

  render() {
    const {
      match: {
        params: {
          id,
        }
      },
    } = this.props;

    return (
      <div>
        <BookData id={parseInt(id, 10)} />
      </div>
    );
  }
}

export default BookPage;