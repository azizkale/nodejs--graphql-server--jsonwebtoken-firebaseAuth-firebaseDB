const hello = require("./query/hello");
const loginFirebase = require("./mutations/firebaseSignUp");

const resolvers = {
    Query: {

        hello: () => { return "azzi" }
    },
    Mutation: {
        loginFirebase: loginFirebase
    }
}

module.exports = resolvers;