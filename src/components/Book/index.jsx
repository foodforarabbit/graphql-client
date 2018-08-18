import React from 'react';
import { Query } from "react-apollo";
import Book from '../../models/Book';
import { Link } from 'react-router-dom';

const Books = ({ id }) => (
  <Query
    query={Book.queries.getBook}
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
        {
          [data.book].map(({ id, title, author, votes }) => (
            <div key={id}>
              <p>id: {id}</p>
              <p>title: <b>{title}</b></p>
              <p>votes: <span style={{color: votes >= 0 ? 'green' : 'red'}}>{votes}</span></p>
              <p>author: {author.firstName} {author.lastName}</p>


              <p></p>
            </div>
          ))
        }
      </div>
    }}
  </Query>
);

export default Books;