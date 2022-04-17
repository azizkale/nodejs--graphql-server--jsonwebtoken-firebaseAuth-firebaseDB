import Book from '../../../models/Book';
import { getDatabase, ref, set } from "firebase/database";
const firebaseApp = require("../../../tools/firebaseTools");

const { v1: uuidv1 } = require('uuid');

const addBookToUser = (_, { name, totalPageCount, userId }) => {
    const bookId = uuidv1();
    let book = new Book(name, totalPageCount, bookId);

    const db = getDatabase(firebaseApp);
    set(ref(db, 'users/' + userId + '/books/' + bookId), {
        name: name,
        totalPageCount: totalPageCount,
        readPageCount: 0
    });
    return book;
}

module.exports = addBookToUser;