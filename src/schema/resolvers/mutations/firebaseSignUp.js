const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");

const signUpFirebase = async(_, { email, password }) => {

    const auth = await getAuth(firebaseApp);
    let accessToken;
    await createUserWithEmailAndPassword(auth, email, password).
    then((userCredential) => {
        // Signed in 
        accessToken = userCredential.user.stsTokenManager.accessToken;
        return accessToken;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });
    if (accessToken == null)
        return null
    else return accessToken;
}

module.exports = signUpFirebase;