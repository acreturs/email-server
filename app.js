var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { receiver, router } = require('./routes/email.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var emailRouter = require('./routes/email');
var pictureRouter = require('./routes/picture');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/email', router)
app.use(`/picture/*`, pictureRouter)
//app.use(`/picture/corny`, pictureRouter)
//app.use(`/picture`, express.static('./korken-dose-mit-deckel-klarglas__0713739_pe729738_s5.jpg'))
//pictureRouter)
app.use('/picture', pictureRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
