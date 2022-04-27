import { getDatabase, ref, set } from "firebase/database";
const firebaseApp = require("../tools/firebaseTools");
const User = require("../models/User");
const { v1: uuidv1, v4: uuidv4 } = require('uuid');


const createUser = async(email, groupId) => {
    const userId = uuidv1();
    // const user = await new User(userId, email, groupId);

    const db = getDatabase(firebaseApp);

    set(ref(db, 'groups/' + groupId + '/members/' + userId), {
        email: email,
    });
    return "";
}
module.exports = createUser;