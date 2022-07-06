import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../tools/firebaseTools";
import Group from '../../../models/Group';

const getGroups = async(_, { mentorId }) => {
    const db = getDatabase(firebaseApp);
    let listGroup = [];
    let path = "mentors/" + mentorId + '/groups';
    return get(ref(db, path))
        .then(async data => {
            data.forEach((childSnapshot) => {

                let group = new Group();
                group.groupname = childSnapshot.val().groupname;
                group.groupId = childSnapshot.key;
                group.mentorId = mentorId;

                listGroup.push(group);
            });
            return listGroup;
        })
        .catch(e => console.log(e));
}

module.exports = getGroups;