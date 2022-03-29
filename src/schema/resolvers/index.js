const hello = require("./query/hello");
const signUpFirebase = require("./mutations/firebaseSignUp");
const signInFirebase = require("./mutations/firebaseSignIn");
const getCurrentUserId = require("./query/manageUsers");

const resolvers = {
    Query: {
        hello: hello,
        getCurrentUserId: getCurrentUserId
    },
    Mutation: {
        signUpFirebase: signUpFirebase,
        signInFirebase: signInFirebase,
    }
}

module.exports = resolvers;