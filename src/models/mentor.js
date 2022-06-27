import User from './User';

class Mentor {
    constructor(email, mentorId, groupId, groupname) {
        this.email = email;
        this.mentorId = mentorId;
        this.groupId = groupId;
        this.groupname = groupname;
        this.members = [User];
    }
}
module.exports = Mentor;