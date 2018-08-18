import React from 'react';
import BookModel from '../../models/Book';
import { Mutation } from "react-apollo";

const VoteStyle = ({ votes, id }) => {
	return <Mutation
    mutation={BookModel.queries.upvoteBook}
  >
    {(upvoteBook, upvoteBookStatus) => (
      <Mutation
        mutation={BookModel.queries.downvoteBook}
      >
        {(downvoteBook, downvoteBookStatus) => (
          <span>
            <button onClick={() => upvoteBook({ variables: { id } })} disabled={upvoteBookStatus.loading}>↑</button>
            <span style={{color: votes >= 0 ? 'green' : 'red'}}>{`${votes}`}</span>
            <button onClick={() => downvoteBook({ variables: { id } })} disabled={downvoteBookStatus.loading}>↓</button>
            {upvoteBookStatus.error && <span>Error could not upvote:( Please try again</span>}
            {downvoteBookStatus.error && <span>Error could not downvote:( Please try again</span>}
          </span>
        )}
      </Mutation>
    )}
  </Mutation>
}

export default VoteStyle;