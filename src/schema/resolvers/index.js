const hello = require("./query/hello");
const signUpFirebase = require("./mutations/firebaseSignUp");
const signInFirebase = require("./mutations/firebaseSignIn");
const createUser = require("./mutations/createUser");
import addBookToUser from './mutations/addBookToUser';
import updateBook from './mutations/updateBook';
import userStatus from './query/userStatus'

const resolvers = {
    Query: {
        hello: hello,
        userStatus
    },
    Mutation: {
        signUpFirebase: signUpFirebase,
        signInFirebase: signInFirebase,
        createUser: createUser,
        addBookToUser: addBookToUser,
        updateBook: updateBook
    }
}

module.exports = resolvers;