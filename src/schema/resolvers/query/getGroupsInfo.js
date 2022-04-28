import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../tools/firebaseTools";

const getGroupsInfo = async() => {
    const db = getDatabase(firebaseApp);

    return get(ref(db, 'groups'))
        .then(async data => {
            console.log(data.val())
            return data;
        })
        .catch(e => console.log(e));

}

module.exports = getGroupsInfo;