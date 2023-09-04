var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req)
    const email = req.baseUrl
    const parts = email.split('/');
    const result = parts.slice(3).join('/'); // Get the string after the second slash
    console.log("Email geöffnet von " + result)
    const imagePath = __dirname + '/korken-dose-mit-deckel-klarglas__0713739_pe729738_s5.jpg';
    res.sendFile(imagePath)
});

module.exports = router;
