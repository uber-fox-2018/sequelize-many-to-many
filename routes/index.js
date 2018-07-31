const routes = require('express').Router()
const routesStudent = require('./students/student')
const routesSubject = require('./subjects/subject')
const routesSTeacher = require('./teachers/teacher')

routes.use('/students',routesStudent)
routes.use('/subjects',routesSubject)
routes.use('/teachers',routesSTeacher)

routes.get('/',function(req,res){
    // res.send('this is homepage')
    res.render('index')
})

module.exports = routes