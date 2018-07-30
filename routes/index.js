const routes = require('express').Router()
const routesStudent = require('./students/student')
const routesSubject = require('./subjects/subject')
const routesSTeacher = require('./teachers/teacher')

routes.use('/student',routesStudent)
routes.use('/subject',routesSubject)
routes.use('/teacher',routesSTeacher)

routes.get('/',function(req,res){
    res.send('this is homepage')
})

module.exports = routes