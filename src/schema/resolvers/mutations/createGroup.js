import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../tools/firebaseTools';
import Group from '../../../models/Group';

const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const createGroup = async(_, { mentorId, groupname, mentoremail }) => {
    const groupId = uuidv1();
    const db = getDatabase(firebaseApp);

    //control if mentor already exist, if not it creates new mentor
    if (mentorId === null || mentorId === undefined) {
        mentorId = uuidv1();

        await set(ref(db, 'mentors/' + mentorId), {
            mentor: {
                mentoremail: mentoremail,
                mentorId: mentorId,
            }
        });
    }

    //creating new group
    await set(ref(db, 'mentors/' + mentorId + '/groups/' + groupId), {
        groupname: groupname,
        groupId: groupId,
        members: [],
    });

    const group = await new Group(groupname, groupId);

    return group;
}

module.exports = createGroup;