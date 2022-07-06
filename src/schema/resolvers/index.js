const hello = require("./query/hello");
const signUpFirebase = require("./mutations/firebaseSignUp");
const signInFirebase = require("./query/firebaseSignIn");
import addBookToUser from './mutations/addBookToUser';
import updateBook from './mutations/updateBook';
import userStatus from './query/userStatus';
import addBadge from './mutations/addBadge';
import createGroup from './mutations/createGroup';
import adminSignIn from './query/adminSignIn';
import getGroups from './query/getGroups';
import sendEmail from './query/sendingEmail';
import createUser from './mutations/createUser'

const resolvers = {
    Query: {
        hello: hello,
        signInFirebase: signInFirebase,
        userStatus: userStatus,
        adminSignIn: adminSignIn,
        getGroups: getGroups,
        sendEmail: sendEmail,
    },
    Mutation: {
        signUpFirebase: signUpFirebase,
        addBookToUser: addBookToUser,
        updateBook: updateBook,
        addBadge: addBadge,
        createGroup: createGroup,
        createUser: createUser
    }
}

module.exports = resolvers;