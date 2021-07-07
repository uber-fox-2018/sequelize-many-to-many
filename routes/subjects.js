const subjects = require('express').Router()
const controller = require('../controllers/subjects')

subjects.get('/', controller.all)
subjects.get('/:id/enrolled-students', controller.enrolled_students)
subjects.post('/:id/give-score', controller.give_score)
subjects.get('/add', controller.add.get)
subjects.post('/add', controller.add.post)
subjects.get('/edit/:subjectId', controller.edit.get)
subjects.post('/edit/:subjectId', controller.edit.post)
subjects.get('/delete/:subjectId', controller.remove.get)
subjects.post('/delete/:subjectId', controller.remove.post)

module.exports = subjects