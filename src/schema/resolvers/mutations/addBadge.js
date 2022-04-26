import { getDatabase, ref, set, onValue } from "firebase/database";
const firebaseApp = require("../../../tools/firebaseTools");

const addBadge = async(_, { homework, participating, userId }) => {

    const db = await getDatabase(firebaseApp);

    set(ref(db, 'users/' + userId + '/badges'), {
        homework: homework,
        participating: participating
    });
    return {
        homework: homework,
        participating: participating
    };
}

module.exports = addBadge;