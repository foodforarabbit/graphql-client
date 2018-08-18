import gql from "graphql-tag";

const fragments = {
  BookData: gql`
    fragment BookData on Book {
      id,
      title,
      votes
    }
  `,
  BookWithAuthor: gql`
    fragment BookWithAuthor on Book {
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
        ...BookData
        ...BookWithAuthor
      }
    }
    ${fragments.BookData}
    ${fragments.BookWithAuthor}
  `,
  searchBooks: gql`
    query SearchBookByTitle($title: String!, $orderBy: String, $asc: Boolean, $offset: Int, $limit: Int) {
      books: searchBooks(title: $title, orderBy: $orderBy, asc: $asc, offset: $offset, limit: $limit) {
        ...BookData
        ...BookWithAuthor
      }
    }
    ${fragments.BookData}
    ${fragments.BookWithAuthor}
  `,
  upvoteBook: gql`
    mutation UpvoteBook($id: Int!) {
      book: upvoteBook(id: $id) {
        ...BookData
      }
    }
    ${fragments.BookData}
  `,
  downvoteBook: gql`
    mutation DownvoteBook($id: Int!) {
      book: downvoteBook(id: $id) {
        ...BookData
      }
    }
    ${fragments.BookData}
  `,
}

export default {
  fragments,
  queries,
};