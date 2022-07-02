const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../tools/firebaseTools");
import { getDatabase, ref, get } from "firebase/database";
import secretkey from "../../../tools/keypair";
import jwt from "jsonwebtoken";

const signInFirebase = async(_, { email, password }, context) => {

    // console.log(jwt.decode(context.token).user.role)
    const auth = await getAuth(firebaseApp);
    let user, token, userId;

    //existing of user control
    await signInWithEmailAndPassword(auth, email, password).
    then(async(userCredential) => {
        //access token from firebase
        // let accessToken = userCredential.user.stsTokenManager.accessToken;

        //getting userID from firebase auth
        userId = await userCredential.user.reloadUserInfo.localId;

        //getting user-info from firebase DB
        const db = getDatabase();
        await get(ref(db, 'mentors/' + userId + '/mentor')).then(data => {
            user = data.val()
        });

        //encoding token
        // token = jwt.sign({ user: user, role: user.role }, secretkey);
        token = jwt.sign({ user }, secretkey);

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    });

    if (token)
        return token
    else
        "please try again"
}

module.exports = signInFirebase;