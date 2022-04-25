const { gql } = require('apollo-server');

const typeDefs = gql `
  type User {
    userId: ID,
    email: String
    username: String
    password: String
  }

  type Book {
    bookId: ID
    name: String
    totalPageCount: Int
    readPageCount: Int
  }

  type Query {
    hello: String
    userStatus: ID
  }

  type Mutation {
    signUpFirebase(email:String, password:String): String
    signInFirebase(email:String, password:String): String
    createUser(name:String, email:String):User
    addBookToUser(name: String, totalPageCount:Int, userId:ID):Book
    updateBook(name:String, totalPageCount:Int, readPageCount:Int, userId:ID, bookId:ID):String
  }
`;
module.exports = typeDefs;