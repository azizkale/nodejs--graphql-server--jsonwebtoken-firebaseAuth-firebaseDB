import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../tools/firebaseTools";

const getGroups = async(_, { mentorId }) => {
    const db = getDatabase(firebaseApp);
    let listGroup = [];
    let path = "mentors/" + mentorId + '/groups';
    return get(ref(db, path))
        .then(async data => {
            data.forEach((childSnapshot) => {
                let group = {
                    "groupname": childSnapshot.val().groupname,
                    "groupId": childSnapshot.key
                }
                listGroup.push(group);
            });
            return listGroup;
        })
        .catch(e => console.log(e));
}

module.exports = getGroups;