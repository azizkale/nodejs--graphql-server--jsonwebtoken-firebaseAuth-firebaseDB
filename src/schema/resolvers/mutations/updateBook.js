import firebase from "firebase/compat/app";
import { update, ref, getDatabase } from "firebase/database";
const firebaseApp = require("../../../tools/firebaseTools");


const updateBook = (_, { name, totalPageCount, readPageCount, userId, bookId }) => {
    const db = getDatabase(firebaseApp);

    const dbRef = ref(db, 'users/' + userId + '/books/' + bookId)
    update(dbRef, {
        name: name,
        totalPageCount: totalPageCount,
        bookId: bookId,
        readPageCount: readPageCount
    }).then(() => {
        return "Data updated";
    }).catch((e) => {
        console.log(e);
        return "Failed"
    })




}

module.exports = updateBook;