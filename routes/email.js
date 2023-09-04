var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexander.cornett.2103@gmail.com',
        pass: 'apctxpefeuuvhdrk'
    }
});

var mailOptions = {
    from: 'alexander.cornett.2103@gmail.co',
    to: 'alexander.cornett.2103@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<p>HTML version of the message</p>' +
        '<img src="http://localhost:3000/picture" alt="Girl in a jacket" width="500" height="600">'
};
//heroku server aufsetzen
function sendMail() {
    transporter.sendMail(mailOptions, function (error, info) {
        print("in mail")
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
module.exports = router;
