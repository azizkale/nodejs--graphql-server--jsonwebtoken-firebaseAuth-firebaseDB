import { getDatabase, ref, set } from "firebase/database";
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
import firebaseApp from '../../../tools/firebaseTools';
import User from '../../../models/User';

const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const createUser = async(_, { email, mentorId, groupId, password }) => {
    const db = getDatabase(firebaseApp);
    const auth = await getAuth(firebaseApp);
    let userId, accessToken;

    //creating and saving user to firebase authenticate
    await createUserWithEmailAndPassword(auth, email, password).
    then(async(userCredential) => {
        // Signed in 
        accessToken = await userCredential.user.stsTokenManager.accessToken;

        //getting userId from Firebase Authentication
        await auth.onAuthStateChanged(async(user) => {
            if (user) {
                // User logged in already or has just logged in.
                userId = await user.uid;

                // ===== saving in firebase DB       
                if (mentorId !== null && groupId !== null) {
                    //creating new group
                    await set(ref(db, 'mentors/' + mentorId + '/groups/' + groupId + '/members/' + userId), {
                        email: email,
                        userId: userId,
                        groups: [groupId],
                    });

                }
            } else {
                // User not logged in or has just logged out.
            }
        });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });

    const user = await new User(userId, email, mentorId, groupId);
    return user;
}

module.exports = createUser;