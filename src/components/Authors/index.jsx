import React from 'react';
import { Query } from "react-apollo";
import Author from '../../models/Author';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import AuthorLink from '../AuthorLink';

const Authors = ({ name, orderBy, asc }) => (
  <Query
    query={Author.queries.searchAuthors}
    variables={{
      name,
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
            offset: data.authors.length
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              authors: [...prev.authors, ...fetchMoreResult.authors]
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
            data.authors.map((author) => (
              <div key={author.id}>
                {`${author.id}:`} <AuthorLink author={author}/>
              </div>
            ))
          }
        </InfiniteScroll> 
      </div>
    }}
  </Query>
);

export default Authors;