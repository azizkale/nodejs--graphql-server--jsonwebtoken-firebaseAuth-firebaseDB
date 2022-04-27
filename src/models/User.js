class User {
    constructor(email, userId, participating, homework, groupId) {
        this.email = email;
        this.userId = userId;
        this.groupId = groupId;
        this.badges = {
            participating: participating,
            homework: homework
        }
        this.books = [];
    }
}
module.exports = User;