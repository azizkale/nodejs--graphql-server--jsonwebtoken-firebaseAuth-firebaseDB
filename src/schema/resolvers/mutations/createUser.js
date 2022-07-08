import { getDatabase, ref, set } from "firebase/database";
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
import firebaseApp from '../../../tools/firebaseTools';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';
import secretkey from "../../../tools/keypair";

// const { v1: uuidv1, v4: uuidv4 } = require('uuid');
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

const createUser = async(_, { email, mentorId, groupId }, context) => {

    let userId;
    const decodedToken = jwt.verify(context.token, secretkey);
    const password = "123456"

    if (mentorId === decodedToken.user.userId) {
        //creating and saving user to firebase authenticate
        await createUserWithEmailAndPassword(auth, email, password).
        then(async(userCredential) => {
            // Signed in 

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
                            role: "user"
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
    } else
        return "Invalid Mentor Info"
}

module.exports = createUser;