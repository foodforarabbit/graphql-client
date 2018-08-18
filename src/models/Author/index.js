import gql from "graphql-tag";

const fragments = {
  Data: gql`
    fragment Data on Author {
      id,
      firstName,
      lastName
    }
  `,
  WithBooks: gql`
    fragment WithBooks on Author {
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
        ...Data
        ...WithBooks
      }
    }
    ${fragments.Data}
    ${fragments.WithBooks}
  `,
  searchAuthors: gql`
    query SearchAuthorByName($name: String!, $orderBy: String, $asc: Boolean, $offset: Int, $limit: Int) {
      authors: searchAuthors(name: $name, orderBy: $orderBy, asc: $asc, offset: $offset, limit: $limit) {
        ...Data
        ...WithBooks
      }
    }
    ${fragments.Data}
    ${fragments.WithBooks}
  `,
}

export default {
  fragments,
  queries,
};