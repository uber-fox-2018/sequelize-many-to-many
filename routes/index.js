const routes = require('express').Router()
const studentRoutes = require('./students')
const subjectsRoutes = require('./subjects')
const teachersRoutes = require('./teachers')

routes.get('/', (req, res) => {
    res.render("index")
})

routes.use('/students', studentRoutes)
routes.use('/subjects', subjectsRoutes)
routes.use('/teachers', teachersRoutes)

module.exports = routes