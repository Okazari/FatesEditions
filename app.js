/* eslint-disable import/no-extraneous-dependencies */
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const rewrite = require('express-urlrewrite')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
  
let uriMongo = `mongodb://${process.env.IP || 'localhost'}:27017/myvirtualstorybook`
if (process.env.MONGODB_ADDON_URI) {
  uriMongo = process.env.MONGODB_ADDON_URI
}
mongoose.connect(uriMongo)

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))
app.use(rewrite('/app/*', '/app'))
app.use('/app', express.static(path.join(__dirname, 'public/app')))
app.use('/static', express.static(path.join(__dirname, 'public/app/static')))

/** ******IMPORT ROUTES*********/
const portal = require('./routes/portal')
const user = require('./routes/user')
const author = require('./routes/author')
const player = require('./routes/player')
const book = require('./routes/book')
const draft = require('./routes/draft')
const genre = require('./routes/genre')
const page = require('./routes/page')
const transition = require('./routes/transition')
const game = require('./routes/game')

const jwt = require('jsonwebtoken')

app.use('/api', portal)

app.use((req, res, next) => {
  try {
    const payload = jwt.verify(req.get('Authorization'), process.env.JWT_SECRET)
    req.payload = payload
    const { user } = payload
    user.password = null
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: 3600 })
    console.log(`${payload.user.username} ${payload.user._id} ${payload.exp}`)
    res.set('Auth-token', token)
    req.locals = {
      user,
    }
    next()
  } catch (err) {
    next()
  }
})

const schema = require('./graphql/RootSchema')
app.use('/api/graphql', graphqlHTTP(req => ({
  schema,
  graphiql: true,
  context: req.locals,
  formatError(err) {
    return {
      message: err.message,
      code: err.originalError && err.originalError.code,   // <--
      locations: err.locations,
      path: err.path
    };
  }
})))


/** ****REST ROUTES*******/
app.use('/api/user', user)
app.use('/api/author', author)
app.use('/api/player', player)
app.use('/api/book', book)
app.use('/api/draft', draft)
app.use('/api/genre', genre)
app.use('/api/page', page)
app.use('/api/transition', transition)
app.use('/api/game', game)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.redirect('/app')
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err,
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
  })
})

module.exports = app
