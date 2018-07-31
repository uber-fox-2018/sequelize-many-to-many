const express = require('express')
const app = express()
const routes = require('./routes/index')
const showGrade = require('./helper/showGrade')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.locals.showGrade = showGrade
app.use('/', routes)


app.listen(3000, () => {
    console.log(`Hi! i'm listen on port 3000`);
})