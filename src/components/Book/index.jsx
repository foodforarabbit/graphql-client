import React from 'react';
import AuthorLink from '../AuthorLink';
import VoteStyle from '../VoteStyle';

const Book = ({ book }) => {
  const {
    id,
    title,
    author,
    votes,
  } = book;
  return <div>
    <p>id: {id}</p>
    <p>title: <b>{title}</b></p>
    <p>votes: <VoteStyle votes={votes} id={id} /></p>
    <p>author: <AuthorLink author={author} /></p>
  </div>
}

export default Book;