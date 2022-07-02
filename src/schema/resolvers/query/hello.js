import jwt from "jsonwebtoken";


const hello = (_, {}, context) => {
    const ctx = jwt.decode(context.token);

    if (ctx.user.role === "mentor")
        return "hello world";
    else
        return "not authorized"
}
module.exports = hello;