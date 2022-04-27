import User from './User';

class Group {
    constructor(name, groupId) {
        this.name = name;
        this.members = [User];
        this.groupId = groupId;
    }
}

module.exports = Group;