const { gql } = require('apollo-server');

const typeDefs = gql `
  type User {
    userId: ID
    email: String
    role: String
    books: [Book]
    badges: [Badge]
    groups: [ID]
    events: [Event]
  }

  type Event{
    eventId: ID
    eventName: String
  }

  type Badge {
   name: String
  }

  type Mentor {
    email: String
    mentorId: ID
    groups: [Group]
    role: String
  }

  type Group {
    groupname: String
    groupId: ID
    mentorId: ID
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
    role: String
  }

  type Query {
    hello: String
    userStatus: ID
    adminSignIn(email: String, password: String, role: String): Admin
    getGroups(mentorId: String):[Group]
    signInFirebase(email:String, password:String): String
    sendEmail(mailFrom: String, mailTo: String, mailSubject: String, mailText: String): String
  }

  type Mutation {
    createMentor(email:String): Mentor    
    addBookToUser(name: String, totalPageCount:Int, userId:ID):Book
    updateBook(name:String, totalPageCount:Int, readPageCount:Int, userId:ID, bookId:ID):String
    addBadge(homework: Int, participating: Int, userId: ID):User
    createGroup(mentorId: ID, groupname: String ): Group
    createUser(email: String, mentorId: ID, groupId: String, password: String): User
  }
`;
module.exports = typeDefs;