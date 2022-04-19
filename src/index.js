const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");


const PORT = process.env.PORT || 5000;

async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();

    server.applyMiddleware({ app });

    app.set('view engine', 'ejs');

    app.get('/login', (req, res) => {
        res.render('../src/view/google-sing-in')
    });

    app.use((req, res) => {
        res.status(200);
        res.send('Hello!');
        res.end();
    });


    await new Promise(resolve => app.listen(PORT, resolve));
    console.log(`Server running on port http://localhost:${PORT}${server.graphqlPath}`)
    return { server, app };
}
startApolloServer();