import { getDatabase, ref, set } from "firebase/database";
const firebaseApp = require("../../../tools/firebaseTools");
const User = require("../../../models/User");
const { v1: uuidv1, v4: uuidv4 } = require('uuid');


const createUser = async(_, { name, email }) => {
    const userId = uuidv1();
    const user = await new User(userId, name, email);
    const db = getDatabase(firebaseApp);
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });
    return user;
}
module.exports = createUser;