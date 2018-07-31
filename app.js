const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Home = require('./routes/index')
const Student = require('./routes/student')
const Subject = require('./routes/subject')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.locals.getScore = require('./helper/getScore')

app.use('/', Home)
app.use('/students', Student)
app.use('/subjects', Subject)

app.listen(3000, function(){
    console.log('Listening on port 3000');
})