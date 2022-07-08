const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");
import { getDatabase, ref, set } from "firebase/database";
import Mentor from '../../../models/Mentor';

const auth = getAuth(firebaseApp);
const db = getDatabase();

const createMentor = async(_, { email }) => {

    const password = "123456";
    let mentor;
    //creating and saving user to firebase authenticate
    await createUserWithEmailAndPassword(auth, email, password).
    then(async(userCredential) => {
        // Signed in 

        //getting userId from Firebase Authentication
        let userId;
        await auth.onAuthStateChanged(async(user) => {
            if (user) {
                // User logged in already or has just logged in.
                userId = await user.uid;

                // ===== saving in firebase DB according to user's role
                await set(ref(db, 'mentors/' + userId), {
                    mentor: {
                        email: email,
                        mentorId: userId,
                        role: "mentor"
                    }
                });

                mentor = await new Mentor(email, userId);
            } else {
                // User not logged in or has just logged out.
            }
        });
        // return accessToken;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });

    return mentor;
}

module.exports = createMentor;