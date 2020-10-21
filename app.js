const express = require('express')
const app = express()
const router = require('./router/router')
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

app.set('view engine', 'pug')
app.use('/', express.static('public'))

app.use(router)

app.listen(PORT, () => { console.log("Server is running on port : ", PORT) })