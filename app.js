'use strict'
const express = require('express')
let app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes )
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('App server is running on port 3000')
})