'use strict'
const express = require('express')
const app = express()
const index = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', index)
app.use('/student', student)
app.use('/teacher', teacher)
app.use('/subject', subject)

app.listen(3000, () => 
    console.log('app listening on port 3000!')
)


    

