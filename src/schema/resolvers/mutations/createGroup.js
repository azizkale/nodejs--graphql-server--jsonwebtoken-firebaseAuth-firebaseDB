import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../tools/firebaseTools';
import Group from '../../../models/Group';
import jwt from "jsonwebtoken";


const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const createGroup = async(_, { mentorId, groupname }, context) => {
    const groupId = uuidv1();
    const db = getDatabase(firebaseApp);
    console.log((context))

    if (mentorId !== null) {
        //creating new group
        await set(ref(db, 'mentors/' + mentorId + '/groups/' + groupId), {
            groupname: groupname,
            groupId: groupId,
            members: [],
        });

    }

    const group = await new Group(groupname, groupId);

    return group;
}

module.exports = createGroup;