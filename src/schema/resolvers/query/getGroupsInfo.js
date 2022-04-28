import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../tools/firebaseTools";

const getGroupsInfo = async() => {
    const db = getDatabase(firebaseApp);
    let listGroup = [];
    return get(ref(db, 'groups'))
        .then(async data => {
            console.log(data.val())
            data.val().forEach(group => {
                listGroup.push(group);
            });
            return listGroup;
        })
        .catch(e => console.log(e));

}

module.exports = getGroupsInfo;