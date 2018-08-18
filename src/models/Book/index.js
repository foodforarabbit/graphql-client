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
}

export default {
  fragments,
  queries,
};