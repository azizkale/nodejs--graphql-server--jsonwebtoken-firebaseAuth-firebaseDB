import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../tools/firebaseTools";
import User from "../../../models/User";
import Book from "../../../models/Book";
import Badge from "../../../models/Badge";
import Group from "../../../models/Group";

const getGroupsInfo = async() => {
    const db = getDatabase(firebaseApp);
    let listGroup = [];
    return get(ref(db, 'groups'))
        .then(async data => {
            data.forEach((childSnapshot) => {
                //creating Group obj.
                let group = new Group();
                //getting grouğname and groupID
                group.name = childSnapshot.val().name;
                group.groupId = childSnapshot.key;
                //getting members
                let listMembers = [];
                for (let memberId in childSnapshot.val().members) {
                    listMembers.push(childSnapshot.val().members[memberId])
                }
                group.members = listMembers;
                //
                group.badges = childSnapshot.val().badges;
                // const grupId = childSnapshot.key;
                // const grupInfo = childSnapshot.val();
                listGroup.push(group);

                // console.log(grupInfo.members = childSnapshot.val().members[0])
            });
            console.log(listGroup);
            return listGroup;
        })
        .catch(e => console.log(e));
}

module.exports = getGroupsInfo;