const students = require('express').Router()
const all = require('./all')
const add = require('./add')
const edit = require('./edit')
const remove = require('./delete')
const add_subject = require('./add_subject')

students.get('/', all)
students.get('/add', add.get)
students.post('/add', add.post)
students.get('/:id/add-subject', add_subject.get)
students.post('/:id/add-subject', add_subject.post)
students.get('/edit/:id', edit.get)
students.post('/edit/:id', edit.post)
students.get('/delete/:id', remove.get)
students.post('/delete/:id', remove.post)

module.exports = students