import { getDatabase, ref, set } from "firebase/database";
const firebaseApp = require("../../../tools/firebaseTools");

const createUser = async(_, { name, email }) => {
    const { name, email } = { name, email };

    function writeUserData(userId, name, email) {
        const db = getDatabase(firebaseApp);
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
        });
    }
}


module.exports = createUser;