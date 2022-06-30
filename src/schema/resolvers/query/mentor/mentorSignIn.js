const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../../tools/firebaseTools");

const mentorSignIn = async(_, { mentoremail, password }) => {

    const auth = await getAuth(firebaseApp);
    let accessToken;

    await signInWithEmailAndPassword(auth, mentoremail, password).
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

module.exports = mentorSignIn;