import gql from "graphql-tag";

const fragments = {
  Data: gql`
    fragment Data on Book {
      id,
      title,
      votes
    }
  `,
  WithAuthor: gql`
    fragment WithAuthor on Book {
      author {
        id,
        firstName,
        lastName
      }
    }
  `,
};

const queries = {
  getBook: gql`
    query GetBook($id: Int!) {
      book: getBook(id: $id) {
        ...Data
        ...WithAuthor
      }
    }
    ${fragments.Data}
    ${fragments.WithAuthor}
  `,
  searchBooks: gql`
    query SearchBookByTitle($title: String!, $orderBy: String, $asc: Boolean, $offset: Int, $limit: Int) {
      books: searchBooks(title: $title, orderBy: $orderBy, asc: $asc, offset: $offset, limit: $limit) {
        ...Data
        ...WithAuthor
      }
    }
    ${fragments.Data}
    ${fragments.WithAuthor}
  `,
  upvoteBook: gql`
    mutation UpvoteBook($id: Int!) {
      book: upvoteBook(id: $id) {
        ...Data
      }
    }
    ${fragments.Data}
  `,
  downvoteBook: gql`
    mutation DownvoteBook($id: Int!) {
      book: downvoteBook(id: $id) {
        ...Data
      }
    }
    ${fragments.Data}
  `,
}

export default {
  fragments,
  queries,
};