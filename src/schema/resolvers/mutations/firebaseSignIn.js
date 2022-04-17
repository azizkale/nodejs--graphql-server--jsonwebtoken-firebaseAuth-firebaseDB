const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");

const signInFirebase = async(_, { email, password }) => {

    const auth = await getAuth(firebaseApp);
    let accessToken;

    await signInWithEmailAndPassword(auth, email, password).
    then((userCredential) => {
        accessToken = userCredential.user.stsTokenManager.accessToken;

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });

    if (accessToken == null)
        return null
    else return accessToken;
}

module.exports = signInFirebase;