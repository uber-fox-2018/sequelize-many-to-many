const express        = require('express')
const app            = express()

const routerTeacher  = require('./routes/teacher')
const routerSubject  = require('./routes/subject')
const routerStudent  = require('./routes/student')
const port    = 2500

app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use('/teacher', routerTeacher)
app.use('/subject', routerSubject)
app.use('/student', routerStudent)

app.listen(port, () => {
    console.log('app listening on port ', port)
})