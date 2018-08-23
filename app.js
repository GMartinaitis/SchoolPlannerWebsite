var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); /*Creates express application*/
/*express configuration begins below*/
// view engine setup
app.engine('hbs', hbs({extname: 'hbs' , defaultLayout: 'layout' , layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views')); /*__dirname refers to project root, tells views to go to the views folder*/
app.set('view engine', 'hbs'); /*sets jade as the templating engine*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); /*these files should be loaded statically through an import link in html. Sets public folder where assets are located*/

app.use('/', indexRouter); /*use is the current requst, so if url path = / use indexRouter. Defined on line 7*/
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
