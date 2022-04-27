class User {
    constructor(name, email, userId, participating, homework, groupId) {
        this.name = name;
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