const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");
import { getDatabase, ref, set } from "firebase/database";
import resetPassword from '../query/resetPasswordLink';

const signUpFirebase = async(_, { email, password, role }) => {
    const auth = await getAuth(firebaseApp);
    let accessToken;

    //creating and saving user to firebase authenticate
    await createUserWithEmailAndPassword(auth, email, password).
    then(async(userCredential) => {
        // Signed in 
        accessToken = await userCredential.user.stsTokenManager.accessToken;

        //getting userId from Firebase Authentication
        let userId;
        await auth.onAuthStateChanged(async(user) => {
            if (user) {
                // User logged in already or has just logged in.
                userId = await user.uid;
            } else {
                // User not logged in or has just logged out.
            }
        });

        // ===== saving in firebase DB according to user's role
        if (role === "user") {

        } else if (role === "mentor") {
            //saving to firebaseDB
            const db = await getDatabase();
            await set(ref(db, 'mentors/' + userId), {
                mentor: {
                    email: email,
                    userId: userId,
                    role: role
                }
            });
        }
        return accessToken;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });

    if (accessToken == null)
        return "Please try again"
    else return accessToken;


}

module.exports = signUpFirebase;