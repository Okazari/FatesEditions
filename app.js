var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var uriMongo = "mongodb://"+process.env.IP+':27017/myvirtualstorybook';
if(process.env["MONGODB_ADDON_URI"]){
  uriMongo = process.env["MONGODB_ADDON_URI"];
}
mongoose.connect(uriMongo);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/app', express.static(path.join(__dirname, 'public/angularApp')));

/********IMPORT ROUTES*********/
var portal = require('./routes/portal');
var player = require('./routes/player');
var book = require('./routes/book');
var genre = require('./routes/genre');
var page = require('./routes/page');
var transition = require('./routes/transition');
var game = require('./routes/game');

var jwt = require('jsonwebtoken');

app.use('/api',portal);

app.use(function(req, res, next){
  if(!req.get('Authorization')){
    var err = new Error('Not Authorized');
    err.status = 401;
    next(err);
  }else{
    try{
      var payload = jwt.verify(req.get('Authorization'),'mysecretstory');
      req.payload = payload;
      var token = jwt.sign({user:payload.user},"mysecretstory",{expiresIn:3600});
      console.log(payload.user.username+' '+payload.exp);
      res.set('Auth-token', token);
      next();
    }catch(err){
      err.status = 401;
      next(err);
    }
  }
})

/******REST ROUTES*******/
app.use('/api/player',player);
app.use('/api/book',book);
app.use('/api/genre',genre);
app.use('/api/page',page);
app.use('/api/transition',transition);
app.use('/api/game',game);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
