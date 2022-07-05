const nodemailer = require('nodemailer');
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
const firebaseApp = require("../../../tools/firebaseTools");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'kaleaziz1st@gmail.com',
        pass: 'uapunkomsgwqcxqn',
    },
});


const sendEmail = (_, { mailFrom, mailTo, mailSubject, mailText }) => {
    // ====================================================================================
    transporter.sendMail({
        from: mailFrom + '<youremail@gmail.com>', // sender address
        to: mailTo, // list of receivers
        subject: mailSubject, // Subject line
        text: mailText, // plain text body
        html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}

module.exports = sendEmail;