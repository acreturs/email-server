var express = require('express');
var pictureRouter = express.Router();
var nodemailer = require('nodemailer');
var receiver = "acornett@gmx.de"

//hier muss dann über die verschiedenen Mails itteriert werden


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexander.cornett.2103@gmail.com',
        pass: 'apctxpefeuuvhdrk'
    }
});


//heroku server aufsetzen
function sendMail(openedby) {
    var mailOptions = {
        from: 'alexander.cornett.2103@gmail.com',
        to: 'alexander.cornett.2103@gmail.com',
        subject: `Email opened by ${openedby} `,
        html: '<p>kik wurde geöffnet </p>'
    };
    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            console.log(error);
        } else {
            console.log('Email sent lul: ' + info.response);
        }
    });
}

//hier muss noch email schicken, wenn geöffnet soll die get methode auslesen,
// an wen ich gesendet habe, dann kriege ich bestätigung dafür, dass erhalten
/* GET home page. */
pictureRouter.get('/', function (req, res, next) {
    console.log(req)
    const email = req.baseUrl
    const parts = email.split('/');
    const result = parts.slice(3).join('/'); // Get the string after the second slash
    console.log("Email geöffnet von " + result)
    receiver = result
    const imagePath = __dirname + '/korken-dose-mit-deckel-klarglas__0713739_pe729738_s5.jpg';
    sendMail(result)
    res.sendFile(imagePath)
});

module.exports = { pictureRouter, receiver };
