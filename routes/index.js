const routes = require('express')();
const student = require('../controller/students')
const subject = require('../controller/subjects')

routes.get('/', (req, res)=>{
    res.render('home.ejs')
})
routes.get('/students', student)
routes.get('/students/:id',student)
routes.get('/students/:id/add-subject',student)
routes.post('/students/:id/add-subject',student)
routes.get('/studens/add-students',student)
routes.post('/studens/add-students',student)
routes.get('/subjects', subject)
routes.get('/subjects/:id/enrolled-students',subject)

module.exports = routes