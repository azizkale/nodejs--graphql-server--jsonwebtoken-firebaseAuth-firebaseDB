import User from './User';

class Group {
    constructor(name, groupId, mentor) {
        this.name = name;
        this.members = [User];
        this.groupId = groupId;
        this.badges = [Badge];
        this.mentor = mentor
    }
}

module.exports = Group;