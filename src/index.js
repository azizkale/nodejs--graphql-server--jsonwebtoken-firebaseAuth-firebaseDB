const { ApolloServer } = require('apollo-server');
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");
import jwt from "jsonwebtoken";
import { rule, shield, and, or, not } from "graphql-shield";
import secretkey from "./tools/keypair";

const PORT = process.env.PORT || 5000;

const getClaims = (req) => {
    let token;
    try {
        // token = jwt.verify(req.request.headers.authorization, secretkey);
        token = jwt.verify(req.req.rawHeaders[13], secretkey);

    } catch (e) {
        return null;
    }
    return token;
}


// Rules
const isAuthenticated = rule()(async(parent, args, ctx, info) => {

    return ctx.claims !== null;
});

const canAddUser = rule()(async(parent, args, ctx, info) => {
    return ctx.claims.role === "admin";
});


// Permissions
const permissions = shield({
    Query: {
        hello: and(isAuthenticated),
        signInFirebase: and(isAuthenticated),
    },
    Mutation: {
        signUpFirebase: and(isAuthenticated),
    },
});


const server = new ApolloServer({
    typeDefs,
    resolvers,
    middlewares: [permissions],
    context: (req) => ({
        claims: getClaims(req),
    }),
});

server.listen({ port: PORT }).then(() => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
});