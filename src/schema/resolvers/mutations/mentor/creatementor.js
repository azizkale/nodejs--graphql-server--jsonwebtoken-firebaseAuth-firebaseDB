import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../../tools/firebaseTools';
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const createMentor = async(_, { mentoremail, password }) => {

    const auth = await getAuth(firebaseApp);
    let accessToken;
    await createUserWithEmailAndPassword(auth, mentoremail, password).
    then(async(userCredential) => {
        // Signed in 
        accessToken = await userCredential.user.stsTokenManager.accessToken;

        let mentorId;
        //getting userId from Firebase Authentication
        await auth.onAuthStateChanged(async(mentor) => {
            if (mentor) {
                // User logged in already or has just logged in.
                mentorId = await mentor.uid;

            } else {
                // User not logged in or has just logged out.
            }
        });

        //saving to firebaseDB
        const db = await getDatabase();
        await set(ref(db, 'mentors/' + mentorId), {
            mentor: {
                mentoremail: mentoremail,
                mentorId: mentorId,
            }
        });

        return accessToken;
    }).catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
    });


    if (accessToken == null)
        return "Please try again"
    else return accessToken;


}

module.exports = createMentor;