const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");

const loginFirebase = async(_, { email, password }) => {

    const auth = await getAuth(firebaseApp);

    await createUserWithEmailAndPassword(auth, email, password).
    then((userCredential) => {
        // Signed in 
        const accessToken = userCredential.user.stsTokenManager.accessToken;
        return accessToken;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });

}

module.exports = loginFirebase;