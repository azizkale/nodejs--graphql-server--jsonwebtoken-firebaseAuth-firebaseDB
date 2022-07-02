const { ApolloServer } = require('apollo-server');
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");


const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        return { token };
    },
});

server.listen({ port: PORT }).then(() => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
});