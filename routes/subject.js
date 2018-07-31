const routes           = require('express').Router()
const subjectHandler   = require('../controllers/subject')
const bodyParser       = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({
    extended : false
})

// READ DATA
routes.get('/', subjectHandler.show)

// ADD TO STUDENT
routes.get('/:id/add-subject', subjectHandler.showStudentSubject)
routes.post('/add-subject', urlEncodedParser, subjectHandler.addStudentSubject)

module.exports = routes