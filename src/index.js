const { ApolloServer } = require('apollo-server');
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");
const dotenv = require("dotenv");

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});