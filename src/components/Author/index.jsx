import React from 'react';
import { Query } from "react-apollo";
import Author from '../../models/Author';
import { Link } from 'react-router-dom';
import BookLine from '../BookLine';

const AuthorDisplay = ({ id }) => (
  <Query
    query={Author.queries.getAuthor}
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
        <Link to="/authors">Back to authors</Link>
        {
          [data.author].map(({ id, firstName, lastName, books = [] }) => (
            <div key={id}>
              <p>id: {id}</p>
              <p>name: <b>{firstName} {lastName}</b></p>
              <p>books:</p>
              {
                books.map((book) => (
                  <div key={book.id}>
                    <BookLine book={book}/>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    }}
  </Query>
);

export default AuthorDisplay;