const teachers = require('express').Router()
const controller = require('../controllers/teachers')

teachers.get('/', controller.all)
teachers.get('/add', controller.add.get)
teachers.post('/add', controller.add.post)
teachers.get('/edit/:teacherId', controller.edit.get)
teachers.post('/edit/:teacherId', controller.edit.post)
teachers.get('/delete/:teacherId', controller.remove.get)
teachers.post('/delete/:teacherId', controller.remove.post)

module.exports = teachers