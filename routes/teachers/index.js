const teachers = require('express').Router()
const all = require('./all')
const add = require('./add')
const edit = require('./edit')
const remove = require('./delete')

teachers.get('/', all)
teachers.get('/add', add.get)
teachers.post('/add', add.post)
teachers.get('/edit/:teacherId', edit.get)
teachers.post('/edit/:teacherId', edit.post)
teachers.get('/delete/:teacherId', remove.get)
teachers.post('/delete/:teacherId', remove.post)

module.exports = teachers