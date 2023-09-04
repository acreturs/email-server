var express = require('express');
var router = express.Router();
const { receiver } = require('./email.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(receiver)
  res.render('index', { title: 'Express' });
});

module.exports = router;
