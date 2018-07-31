const express = require('express')
const app = express()
const index = require('./routes/index.js')
const student = require('./routes/student.js')
const subject = require('./routes/subject.js')
const bodyParser = require('body-parser')

app.set('views engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', index)
app.use('/student', student)
app.use('/subject', subject)




app.listen(3000, function(){
    console.log('my express')
})