const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res) => {
    Model.Subject.findAll({
        order: [['id', 'ASC']],
        include: [Model.Student, Model.Teacher]
    })
    .then((dataSubject) => {
        res.render('subject', {dataSubject: dataSubject})
    })
    .catch((err) => {
        res.send(err.message)
    })
})

router.get('/:id/enrolled-student', (req,res) => {
    Model.Subject.findById(req.params.id, {
        order: [['id', 'ASC']],
        include: [Model.Student]
    })
    .then((dataSubject) => {
        res.render('enrolledstudent', {dataSubject: dataSubject})
    })
})

router.get('')

module.exports = router