import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../tools/firebaseTools';
import Group from '../../../models/Group';
import Mentor from '../../../models/mentor';

const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const createGroup = async(_, { groupname, mentoremail }) => {
    const groupId = uuidv1();
    const mentorId = uuidv1();

    const group = await new Group(groupname, groupId);
    const mentor = await new Mentor(mentoremail, mentorId, groupId, groupname)

    const db = getDatabase(firebaseApp);
    set(ref(db, 'groups/' + groupId), {
        groupname: groupname,
        groupId: groupId,
        members: [],
        mentor: {
            mentoremail: mentoremail,
            mentorId: mentorId,
            groupId: groupId,
            groupname: groupname

        }
    });
    return group;
}

module.exports = createGroup;