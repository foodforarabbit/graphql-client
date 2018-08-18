import React from 'react';
import { Link } from 'react-router-dom';

import AuthorLink from '../AuthorLink';
import BookLink from '../BookLink';
import VoteStyle from '../VoteStyle';

const BookLine = ({ book }) => {
  const {
    id,
    title,
    author,
    votes,
  } = book;
  return <span>
    {`${id}: `}
    <b>
      <BookLink book={book} />
    </b>
    {
      author &&
      <span style={{fontSize: 12}}>
        {' '}by: <AuthorLink author={author} />
      </span>
    }
    (<VoteStyle votes={votes} />)
  </span>
}

export default BookLine;