const express        = require('express')
const app            = express()
const router         = require('./router/router')
const dotenv         = require("dotenv").config()
const PORT           = process.env.PORT
const googleStrategy = require('./services/passport-setup')
const mongodb        = require('./config/Mongodb')
const cookieSession  = require('cookie-session')
const passport       = require('passport')

/*
 * @Set express static url path
 */
app.set('view engine', 'pug')
app.use('/', express.static('public'))

/*
 * @Use cookie session
 */
app.use(cookieSession(
{
    maxAge: 24 * 120 * 1000,
    keys: [process.env.COOKIE_SESSION_KEY]
}))

/*
 * @Initialize passport
 */
app.use(passport.initialize())
app.use(passport.session())

/*
 * @Use router
 */
app.use(router)

/*
 * @Listen to server
 */
app.listen(PORT, () => { console.log("Server is running on port : ", PORT) })
