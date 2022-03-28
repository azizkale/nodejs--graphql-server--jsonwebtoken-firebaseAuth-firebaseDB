const hello = require("./query/hello");

const resolvers = {
    Query: {

        hello: () => { return "azzi" }
    },

}

module.exports = resolvers;