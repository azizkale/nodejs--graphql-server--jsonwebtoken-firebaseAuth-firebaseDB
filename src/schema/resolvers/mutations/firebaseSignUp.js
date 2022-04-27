const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");
import createUser from '../../../funcitons/createUser';
const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const signUpFirebase = async(_, { email, password, groupId }) => {

    const auth = await getAuth(firebaseApp);
    let accessToken;
    await createUserWithEmailAndPassword(auth, email, password).
    then(async(userCredential) => {
        // Signed in 
        accessToken = await userCredential.user.stsTokenManager.accessToken;

        //Create User To Reatime DB
        const userId = await uuidv1();
        // const user = await new User(userId, name, email, groupId);
        await createUser(email, groupId);
        return accessToken;
    }).catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
    });
    if (accessToken == null)
        return null
    else return accessToken;
}

module.exports = signUpFirebase;