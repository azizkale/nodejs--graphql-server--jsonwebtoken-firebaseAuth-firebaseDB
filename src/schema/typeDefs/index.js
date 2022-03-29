const { gql } = require('apollo-server');

const typeDefs = gql `
  type Query {
    hello: String
  }

  type Mutation {
    signUpFirebase(email:String, password:String): String
    signInFirebase(email:String, password:String): String
  }
`;
module.exports = typeDefs;