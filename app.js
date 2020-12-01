const express   = require('express')
const app       = express()
const router    = require('./router/router')
const dotenv    = require("dotenv").config()
const PORT      = process.env.PORT

/*
 * @Set express static url path
 */
app.set('view engine', 'pug')
app.use('/', express.static('public'))

/*
 * @Use router
 */
app.use(router)

/*
 * @Listen to server
 */
app.listen(PORT, () => { console.log("Server is running on port : ", PORT) })