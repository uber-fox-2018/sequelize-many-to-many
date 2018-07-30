const subjects = require('express').Router()
const all = require('./all')
const add = require('./add')
const edit = require('./edit')
const remove = require('./delete')

subjects.get('/', all)
subjects.get('/add', add.get)
subjects.post('/add', add.post)
subjects.get('/edit/:subjectId', edit.get)
subjects.post('/edit/:subjectId', edit.post)
subjects.get('/delete/:subjectId', remove.get)
subjects.post('/delete/:subjectId', remove.post)

module.exports = subjects