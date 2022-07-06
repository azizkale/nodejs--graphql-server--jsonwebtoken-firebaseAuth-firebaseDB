class User {
    constructor(email, userId) {
        this.email = email;
        this.userId = userId;
        this.groups = []; // IDs of user's groups
        this.badges = [] // IDs of user's badges       
        this.books = [];
        this.events = []
    }
}
module.exports = User;