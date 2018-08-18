import React from 'react';
import { Link } from 'react-router-dom';

const BookLink = ({ book }) => {
  return <Link to={`/book/${book.id}`}>{book.title}</Link>;
}

export default BookLink;