// 'use strict'

const routes = require('express').Router()
const Models = require('../../models')
const Teacher = Models.Teacher
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({
    extended: false
})

routes.get('/', (req, res) => {
    Teacher.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Models.Subject
            }]
        })
        .then(data => {
            res.render('teacher', {
                title: 'teacher',
                header: 'teacher page',
                data: data
            })
        })
        .catch(err => {})
})

routes.get('/:id/delete', (req, res) => {
    Models.Teacher.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            console.log(err);

        })
})

routes.post('/updateData', bodyParserUrlencoded, (req, res) => {
    let dataTeacher = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subjectId: req.body.subjectId
    }
    Models.Teacher.update(dataTeacher, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            res.render('updateTeacher', {
                title: 'updateTeacher',
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
    Models.Teacher.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            console.log(data[0].dataValues.firstName);
            res.render('updateTeacher', {
                title: 'Update Teacher',
                header: 'Update Teacher',
                id: data[0].dataValues.id,
                firstName: data[0].dataValues.firstName,
                lastName: data[0].dataValues.lastName,
                email: data[0].dataValues.email,
                subjectId: data[0].dataValues.subjectId
            })
        })
})
routes.post('/add', bodyParserUrlencoded, (req, res) => {
    Models.Teacher.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            subjectId: req.body.subjectId
        })
        .then(data => {
            res.redirect("/Teacher")
        })
        .catch(err => {
            res.redirect('/Teacher', {
                title: 'Teacher',
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                subjectId: '',
                header: 'Teacher page ' + err,
            })
        })
})
routes.get('/add', (req, res) => {
    Models.Subject.findAll()
    .then(data => {
        res.render('addTeacher', {
            title: 'Add Teacher',
            header: 'Add Teacher',
            data:data
        })
    })
    
})
module.exports = routes