
import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

// client
//   .query({
//     query: gql`
//       {
// 			  books {
// 			    id,
// 			    author {
// 			      id,
// 			      firstName
// 			    }
// 			  },
// 			  firstAuthor: author(id: 1){
// 			    id,
// 			    firstName
// 			  }
// 			}
//     `
//   })
//   .then(result => console.log(result));

export default client;