const routes = require('express').Router()
const routerTeacher = require('./teacherRoutes')
const routerSubject = require('./subjectRoutes')
const routerStudent = require('./studentRoutes')

routes.use('/teachers', routerTeacher)
routes.use('/subjects', routerSubject)
routes.use('/students', routerStudent)

routes.get('/', function(req, res) {
    // res.send('masuk routes')
    res.render('home')
})

module.exports = routes