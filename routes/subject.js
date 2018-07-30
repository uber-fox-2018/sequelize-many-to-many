const router = require('express').Router()
const models = require('../models')
const Subject = models.Subject

router.get('/', (req,res) => {
    Subject.findAll({
        include: [models.Teacher]
    })
    .then((data_subjects) => {
        res.render('../views/subject/subject', {data_subjects: data_subjects})
    })
})

router.get('/:id/enrolled-students', (req,res) => {
    models.Subject.findById(req.params.id,{
        order: [["id","ASC"]],
        include: [models.Student]
    })
    .then((data) => {
        // res.json(data)
        res.render('../views/subject/enrolled-students', {data: data})
    })
})

module.exports =router