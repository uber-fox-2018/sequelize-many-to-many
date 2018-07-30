const routes = require('express').Router()
const students = require('./students')
const subjects = require('./subjects')
const teachers = require('./teachers')

routes.get('/', (req, res) => {
    res.render("index")
})

routes.use('/students', students)
routes.use('/teachers', teachers)
routes.use('/subjects', subjects)

module.exports = routes