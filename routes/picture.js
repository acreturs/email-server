var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const imagePath = './korken-dose-mit-deckel-klarglas__0713739_pe729738_s5.jpg'; // Replace with the actual path to your image file
    res.sendFile(imagePath, { root: __dirname })   //res.render('index', { title: 'Express Bild ' });
});

module.exports = router;
