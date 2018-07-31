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
    .then((data_subjects) => {
        res.render('../views/subject/enrolled-students', {data_subjects: data_subjects})
    })
})

router.get('/:id/give-score', (req,res) => {
    models.StudentSubject.findOne({
        include: [models.Student],
        where: {StudentId: req.params.id, score: null}
    })
    .then((student_subject) => {
        res.render('../views/subject/give-score', {student_subject: student_subject})
    })
})

router.post('/:id/give-score', (req,res) => {
    models.StudentSubject.update({
        score: req.body.score
    },{where: {StudentId: req.params.id}})
    .then(() => {
        res.redirect('/subjects')
    })
})

module.exports =router