const { gql } = require('apollo-server');

const typeDefs = gql `
  type User {
    userId: ID
    email: String
    username: String
    password: String
    books: [Book]
    badges: [Badge]
    groupId: ID
    groupname: String
  }

  type Badge {
    homework: Int
    participating: Int
  }

  type Group {
    name: String
    groupId: ID
    members : [User]
  }

  type Book {
    bookId: ID
    name: String
    totalPageCount: Int
    readPageCount: Int
  }
  
  type Admin {
    email: String
    password: ID
  }

  type Query {
    hello: String
    userStatus: ID
    adminSignIn(email: String, password: String): Admin
    getGroupsInfo:[Group]
  }

  type Mutation {
    signUpFirebase(email:String, password:String, groupId: ID, groupname: String): String
    signInFirebase(email:String, password:String): String
    addBookToUser(name: String, totalPageCount:Int, userId:ID):Book
    updateBook(name:String, totalPageCount:Int, readPageCount:Int, userId:ID, bookId:ID):String
    addBadge(homework: Int, participating: Int, userId: ID):User
    createGroup(name: String): Group
  }
`;
module.exports = typeDefs;