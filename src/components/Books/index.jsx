import React from 'react';
import { Query } from "react-apollo";
import Book from '../../models/Book';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

const Books = ({ title, orderBy, asc }) => (
  <Query
    query={Book.queries.searchBooks}
    variables={{
      title,
      orderBy,
      asc,
      offset: 0,
      limit: 10,
    }}
  >
    {({
      loading,
      error,
      data,
      refetch,
      fetchMore,
    }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const loadMore = () => {
        fetchMore({
          variables: {
            offset: data.books.length
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              books: [...prev.books, ...fetchMoreResult.books]
            });
          }
        })
      }

      return <div>
        <button onClick={() => refetch()}>Refetch!</button>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true}
            loader={<div className="loader" key={0}></div>}
        >
          {
            data.books.map(({ id, title, author, votes }) => (
              <div key={id}>
                <p>{`${id}:`} <Link to={`/book/${id}`}><b>{`${title}`}</b></Link> by: {`${author.firstName} ${author.lastName}`} (<span style={{color: votes >= 0 ? 'green' : 'red'}}>{`${votes}`}</span>)</p>
                <p></p>
              </div>
            ))
          }
        </InfiniteScroll> 
      </div>
    }}
  </Query>
);

export default Books;