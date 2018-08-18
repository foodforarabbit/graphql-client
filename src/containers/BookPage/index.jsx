import React, { Component } from 'react';
import Book from '../../components/Book';
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
        <Book id={id} />
      </div>
    );
  }
}

export default BookPage;