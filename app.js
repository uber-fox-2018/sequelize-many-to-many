'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const HomePage = require('./routes/homepage.js')
const Student = require('./routes/student.js')
const Subject = require('./routes/subject.js')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', HomePage)
app.use('/student', Student)
app.use('/subject', Subject)

app.listen(3000, console.log(`connect to localhost:3000`))