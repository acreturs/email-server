var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var receiver = 'acornett@gmx.de'//hier muss dann über die verschiedenen Mails itteriert werden


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexander.cornett.2103@gmail.com',
        pass: 'apctxpefeuuvhdrk'
    }
});

var mailOptions = {
    from: 'alexander.cornett.2103@gmail.co',
    to: receiver,
    subject: 'Sending Email using Node.js',
    html: '<p>HTML version of the message</p>' +
        `<img src="https://emailimageserver.azurewebsites.net/picture/${receiver}" alt="Girl in a jacket" width="500" height="600">`
};
//heroku server aufsetzen
function sendMail() {
    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            console.log(error);
        } else {
            console.log('Email sent lul: ' + info.response);
        }
    });
}

router.get('/', function (req, res, next) {
    sendMail()
    res.render('index', { title: 'Expressdas klappt' });
});
module.exports = { router, receiver };
