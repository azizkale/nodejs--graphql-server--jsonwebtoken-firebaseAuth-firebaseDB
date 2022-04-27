import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from '../../../tools/firebaseTools';
import Group from '../../../models/Group';
const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const createGroup = async(_, { name }) => {
    const groupId = uuidv1();
    const group = await new Group(name, groupId);
    const db = getDatabase(firebaseApp);
    set(ref(db, 'groups/' + groupId), {
        name: name,
        groupId: groupId,
    });
    return group;
}

module.exports = createGroup;