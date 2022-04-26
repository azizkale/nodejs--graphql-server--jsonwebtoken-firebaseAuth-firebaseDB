class User {
    constructor(name, email, userId, participating, homework) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.badges = {
            participating: participating,
            homework: homework
        }
        this.books = [];
    }
}
module.exports = User;