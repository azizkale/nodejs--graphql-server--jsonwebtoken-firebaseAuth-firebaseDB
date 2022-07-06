import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../tools/firebaseTools';
import Group from '../../../models/Group';
import jwt from 'jsonwebtoken';
import secretkey from "../../../tools/keypair";


const { v1: uuidv1, v4: uuidv4 } = require('uuid');
const db = getDatabase(firebaseApp);

const createGroup = async(_, { mentorId, groupname }, context) => {

    const decodedToken = jwt.verify(context.token, secretkey);
    const groupId = uuidv1();

    if (mentorId === decodedToken.user.userId) {
        //creating new group
        await set(ref(db, 'mentors/' + mentorId + '/groups/' + groupId), {
            groupname: groupname,
            groupId: groupId,
            mentorId: mentorId,
            members: [],
        });
        const group = await new Group(groupname, groupId, mentorId);

        return group;
    } else
        return "Invalid Mentor Info"

}

module.exports = createGroup;