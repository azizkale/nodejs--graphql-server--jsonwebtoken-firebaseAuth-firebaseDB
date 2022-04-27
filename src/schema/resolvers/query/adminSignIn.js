import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../tools/firebaseTools";
import Admin from '../../../models/Admin';

const adminSignIn = async(_, { email, password }) => {

    const db = getDatabase(firebaseApp);

    return get(ref(db, 'admin'))
        .then(async data => {
            if (data.val().email === email && data.val().password === password) {
                const admin = await new Admin(email, password, "admin");
                return admin;
            }
            return null;
        })
        .catch(e => console.log(e));

}

module.exports = adminSignIn;