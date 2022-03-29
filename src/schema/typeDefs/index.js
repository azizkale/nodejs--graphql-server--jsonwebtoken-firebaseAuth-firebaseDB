const { gql } = require('apollo-server');

const typeDefs = gql `
  type User {
    userId: ID,
    email: String
    username: String
    password: String

  }
  type Query {
    hello: String
    getCurrentUserId:String
  }

  type Mutation {
    signUpFirebase(email:String, password:String): String
    signInFirebase(email:String, password:String): String
  }
`;
module.exports = typeDefs;