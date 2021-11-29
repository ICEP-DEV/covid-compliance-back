const express =         require('express');
const app =             express();
const mysql =           require('mysql');
const Router =          express.Router();
const connection =      require('../connection');
const bodyParser =      require('body-parser');
const jwt =             require('jsonwebtoken');
const nodemailer =      require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const cors = require('cors'); 

Router.post('/',(req, res) => {
    const output = `
        <h1 style="text-transform: bold"><b> Announcement </b></h1>
        <p> ${req.body.announcement} </p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: 'mkhonkosi02@gmail.com', // generated ethereal user
        pass: 'Nhlanhla.94', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = {
        from: '"Covid Complaince" <mkhonkosi02@gmail.com>', // sender address
        to: 'mkhonkosi28@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: 'Hello world?', // plain text body
        html: output, // html body
    };

    transporter.sendMail(info, (err, ress) => {
        if (err){
            console.log(err);
        }
        console.log("Message sent: %s", ress.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(ress));
    });
});

module.exports = Router;