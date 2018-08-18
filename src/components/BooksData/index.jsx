import React from 'react';
import { Query } from "react-apollo";
import BookModel from '../../models/Book';
import BookLine from '../BookLine';
import InfiniteScroll from 'react-infinite-scroller';

const BooksData = ({ title, orderBy, asc }) => (
  <Query
    query={BookModel.queries.searchBooks}
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
            data.books.map((book) => (
              <div key={book.id}>
                <BookLine book={book}/>
              </div>
            ))
          }
        </InfiniteScroll> 
      </div>
    }}
  </Query>
);

export default BooksData;