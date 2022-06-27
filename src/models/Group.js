import User from './User';

class Group {
    constructor(name, groupId, mentor) {
        this.name = name;
        this.members = [User];
        this.groupId = groupId;
        this.mentor = mentor
    }
}

module.exports = Group;