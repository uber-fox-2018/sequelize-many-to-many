// 'use strict'

const routes = require('express').Router()
const Models = require('../../models')
const Student = Models.Student
const StudentSubject = Models.StudentSubject
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({
    extended: false
})

routes.get('/', (req, res) => {
    Student.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Models.Subject
            }]
        })
        .then(data => {
            res.render('student', {
                title: 'student',
                header: 'Student page',
                data: data
            })
        })
        .catch(err => {})
})

routes.get('/:id/delete', (req, res) => {
    Models.Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/student')
        })
        .catch(err => {
            console.log(err);

        })
})

routes.post('/updateData', bodyParserUrlencoded, (req, res) => {
    let dataStudent = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subjectId: req.body.subjectIdS
    }
    Models.Student.update(dataStudent, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            res.redirect('/student')
        })
        .catch(err => {
            res.render('updateStudent', {
                title: 'updateStudent',
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                subjectId: '',
                header: err,
            })
        })
})

routes.get('/:id/update', (req, res) => {
    Models.Student.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            console.log(data[0].dataValues.firstName);
            res.render('updateStudent', {
                title: 'Update Student',
                header: 'Update Student',
                id: data[0].dataValues.id,
                firstName: data[0].dataValues.firstName,
                lastName: data[0].dataValues.lastName,
                email: data[0].dataValues.email,
                subjectId: data[0].dataValues.subjectId
            })
        })
})
routes.post('/add', bodyParserUrlencoded, (req, res) => {
    Models.Student.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        .then(data => {
            res.redirect("/Student")

        })
        .catch(err => {
            res.redirect('/Student', {
                title: 'Student',
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                header: 'Student page ' + err,
            })
        })
})

routes.get('/add', (req, res) => {
    Models.Subject.findAll()
        .then(data => {
            res.render('addStudent', {
                title: 'Add Student',
                header: 'Add Student',
                data: data
            })
        })

})
module.exports = routes