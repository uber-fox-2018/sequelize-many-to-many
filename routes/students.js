const students = require('express').Router()
const controller = require('../controllers/students')

students.get('/', controller.all)
students.get('/add', controller.add.get)
students.post('/add', controller.add.post)
students.get('/:id/add-subject', controller.addSubject.get)
students.post('/:id/add-subject', controller.addSubject.post)
students.get('/edit/:id', controller.edit.get)
students.post('/edit/:id', controller.edit.post)
students.get('/delete/:id', controller.remove.get)
students.post('/delete/:id', controller.remove.post)

module.exports = students