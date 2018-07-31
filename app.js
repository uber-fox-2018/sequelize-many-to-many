const express = require('express')
const routesTeacher = require('./routes/teacher/teacher')
const routesSubject = require('./routes/subject/subject')
const routesStudent = require('./routes/student/student')
const app = express()

app.set('view engine', 'ejs');
app.use('/teacher', routesTeacher);
app.use('/subject', routesSubject);
app.use('/student', routesStudent);

app.listen(3000, () => {
    console.log('listening to port 3000');
})