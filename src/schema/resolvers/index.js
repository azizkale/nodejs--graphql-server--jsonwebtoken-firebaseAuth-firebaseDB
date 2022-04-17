const hello = require("./query/hello");
const signUpFirebase = require("./mutations/firebaseSignUp");
const signInFirebase = require("./mutations/firebaseSignIn");
const createUser = require("./mutations/createUser");

const resolvers = {
    Query: {
        hello: hello,
    },
    Mutation: {
        signUpFirebase: signUpFirebase,
        signInFirebase: signInFirebase,
        createUser: createUser,
    }
}

module.exports = resolvers;