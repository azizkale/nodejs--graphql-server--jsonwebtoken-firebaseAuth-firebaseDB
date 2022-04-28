class User {
    constructor(email, userId, participating, homework, groupId, groupname) {
        this.email = email;
        this.userId = userId;
        this.groupId = groupId;
        this.groupname = groupname;
        this.badges = {
            participating: participating,
            homework: homework
        }
        this.books = [];
    }
}
module.exports = User;