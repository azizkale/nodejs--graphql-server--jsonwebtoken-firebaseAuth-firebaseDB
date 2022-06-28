import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../tools/firebaseTools';
import Mentor from '../../../../models/mentor';

const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const createGroup = async() => {
    const db = getDatabase(firebaseApp);

    const groupId = uuidv1();
    const mentorId = uuidv1();
    //control if mentor already exist, if not it creates new mentor
    const mentor = await new Mentor(mentor, mentoremail)

    await set(ref(db, 'mentors/' + mentorId), {
        mentor: {
            mentoremail: mentoremail,
            mentorId: mentorId,
            groupname: groupname
        }
    });

    return group;
}

module.exports = createGroup;