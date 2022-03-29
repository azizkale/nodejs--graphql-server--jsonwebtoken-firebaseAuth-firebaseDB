const { getAuth, onAuthStateChanged } = ("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");

const getCurrentUserId = async(_, {}) => {

    const auth = await getAuth(firebaseApp);
    let uid;
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid;

        } else {}
    });
    console.log(uid);
    return uid;
}
module.exports = getCurrentUserId;