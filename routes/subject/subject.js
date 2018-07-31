'use strict'

const routes = require('express').Router()
const Models = require('../../models')
const Subject = Models.Subject
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({
    extended: false
})

routes.get('/', (req, res) => {
    Subject.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Models.Teacher
            }]
        })
        .then(data => {
            res.render('subject', {
                title: 'subject',
                header: 'subject page',
                data: data
            })
        })
})

routes.get('/:id/delete', (req, res) => {
    Subject.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/subject')
        })
        .catch(err => {
            console.log(err);

        })
})

routes.post('/update', bodyParserUrlencoded, (req, res) => {
    let dataSubject = {
        id: req.body.id,
        subjectName: req.body.subjectName
    }
    Subject.update(dataSubject, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            res.redirect('/subject')
        })
})

routes.get('/:id/update', (req, res) => {
    Subject.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.render('updateSubject', {
                title: 'Update Subject',
                header: 'Update Subject',
                id: data[0].dataValues.id,
                subjectName: data[0].dataValues.subjectName
            })
        })
})
routes.post('/add', bodyParserUrlencoded, (req, res) => {
    Subject.create({
            subjectName: req.body.subjectName
        })
        .then(data => {
            res.redirect("/subject")
        })
        .catch(err => {
            res.redirect('/subject', {
                title: 'Subject',
                header: 'Subject page ' + err,
            })
        })
})
routes.get('/add', (req, res) => {
    Subject.findAll()
        .then(data => {
            res.render('addSubject', {
                title: 'Add Subject',
                header: 'Add Subject',
                data: data
            })
        })
})

module.exports = routes