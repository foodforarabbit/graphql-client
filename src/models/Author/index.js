import gql from "graphql-tag";

const fragments = {
  AuthorData: gql`
    fragment AuthorData on Author {
      id,
      firstName,
      lastName
    }
  `,
  AuthorWithBooks: gql`
    fragment AuthorWithBooks on Author {
      books {
        id,
        title,
        votes
      }
    }
  `,
};

const queries = {
  getAuthor: gql`
    query GetAuthor($id: Int!) {
      author: getAuthor(id: $id) {
        ...AuthorData
        ...AuthorWithBooks
      }
    }
    ${fragments.AuthorData}
    ${fragments.AuthorWithBooks}
  `,
  searchAuthors: gql`
    query SearchAuthorByName($name: String!, $orderBy: String, $asc: Boolean, $offset: Int, $limit: Int) {
      authors: searchAuthors(name: $name, orderBy: $orderBy, asc: $asc, offset: $offset, limit: $limit) {
        ...AuthorData
        ...AuthorWithBooks
      }
    }
    ${fragments.AuthorData}
    ${fragments.AuthorWithBooks}
  `,
}

export default {
  fragments,
  queries,
};