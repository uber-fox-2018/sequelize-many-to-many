const routes           = require('express').Router()
const teacherHandler   = require('../controllers/teacher')
const bodyParser       = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({
    extended : false
})
// READ DATA
routes.get('/', teacherHandler.show)

// ADD DATA
routes.get('/add', teacherHandler.add)
routes.post('/send-add', urlEncodedParser, teacherHandler.addPost)

// UPDATE DATA
routes.get('/:id/update', teacherHandler.update)
routes.post('/update', urlEncodedParser, teacherHandler.updatePost)

// DELETE DATA
routes.get('/:id/delete', teacherHandler.delete)

module.exports = routes

