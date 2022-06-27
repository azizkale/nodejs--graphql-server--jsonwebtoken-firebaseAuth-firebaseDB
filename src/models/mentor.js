import User from './User';

class Mentor {
    constructor(mentoremail, mentorId, groupId, groupname) {
        this.mentoremail = mentoremail;
        this.mentorId = mentorId;
        this.groupId = groupId;
        this.groupname = groupname;
        this.members = [User];
    }
}
module.exports = Mentor;