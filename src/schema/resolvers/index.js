const hello = require("./query/hello");
const signUpFirebase = require("./mutations/firebaseSignUp");
const signInFirebase = require("./mutations/firebaseSignIn");
import addBookToUser from './mutations/addBookToUser';
import updateBook from './mutations/updateBook';
import userStatus from './query/userStatus';
import addBadge from './mutations/addBadge';
import createGroup from './mutations/createGroup';
import adminSignIn from './query/adminSignIn';
import getGroupsInfo from './query/getGroupsInfo';

const resolvers = {
    Query: {
        hello: hello,
        userStatus: userStatus,
        adminSignIn: adminSignIn,
        getGroupsInfo: getGroupsInfo

    },
    Mutation: {
        signUpFirebase: signUpFirebase,
        signInFirebase: signInFirebase,
        addBookToUser: addBookToUser,
        updateBook: updateBook,
        addBadge: addBadge,
        createGroup: createGroup,
    }
}

module.exports = resolvers;