import React from 'react';
import { Query } from "react-apollo";
import BookModel from '../../models/Book';
import { Link } from 'react-router-dom';
import Book from '../Book';

const BookData = ({ id }) => (
  <Query
    query={BookModel.queries.getBook}
    variables={{
      id
    }}
  >
    {({
      loading,
      error,
      data,
      refetch,
    }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <div>
        <button onClick={() => refetch()}>Refetch!</button>
        <Link to="/books">Back to books</Link>
        <Book book={data.book} />
      </div>
    }}
  </Query>
);

export default BookData;