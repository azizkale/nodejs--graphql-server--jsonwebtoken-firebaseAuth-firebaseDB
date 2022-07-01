const express = require('express');
const { ApolloServer } = require('apollo-server');
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");
import jwt from "jsonwebtoken";
import { rule, shield, and, or, not } from "graphql-shield";

const PORT = process.env.PORT || 5000;



function getClaims(req) {
    let token;
    try {
        token = jwt.verify(req.request.headers.authorization, "MY_TOKEN_SECRET");
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
    },
    Mutation: {
        addUser: and(isAuthenticated, canAddUser),
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


//   server.start({ port: 4000 }, () =>
//     console.log(“Server is running on http://localhost:4000")
//   );




// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });

server.listen({ port: PORT }).then(() => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
});