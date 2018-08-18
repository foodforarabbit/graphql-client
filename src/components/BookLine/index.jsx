import React from 'react';

import AuthorLink from '../AuthorLink';
import BookLink from '../BookLink';
import VoteStyle from '../VoteStyle';

const BookLine = ({ book }) => {
  const {
    id,
    author,
    votes,
  } = book;
  return <span>
    <VoteStyle votes={votes} id={id} />{' '}
    {`${id}: `}
    <b>
      <BookLink book={book} />
    </b>
    {
      author &&
      <span style={{fontSize: 12}}>
        {' '}by: <AuthorLink author={author} id={id} />
      </span>
    }
  </span>
}

export default BookLine;