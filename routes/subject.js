const routes = require('express').Router()
const ControllerSubject = require('../controller/subject')
const ControllerSubjectStudent = require('../controller/subjectStudent')
const Model = require('../models/index')


routes.get('/', (req, res) => {
    ControllerSubject.getAllDataSubject()
        .then(dataSubjects => {
            // res.json(dataSubjects);  

            res.render('subject/showDataSubject', { dataSubjects })

        })
        .catch(err => {
            console.log(err);

        })
})

routes.get('/add', (req, res) => {
    res.render('subject/addSubject')
})

routes.post('/add', (req, res) => {
    ControllerSubject.create({ subjectName: req.body.subjectName })
        .then(() => {
            res.redirect('/subject')
        })

        .catch(err => {
            res.send(err)
        })
})

routes.get('/:id/enroll-student', (req, res) => {
    ControllerSubject.findById(req.params.id, { include: Model.Student }, {})
        .then(data => {
            res.render('subject/enroll', { data: data, subjectId: req.params.id })
        })

        .catch(err => {
            res.send(err)
        })
})

routes.get('/:id/givescore/:id2', (req, res) => {
    ControllerSubjectStudent.findOne(
        {
            where: {
                SubjectId: req.params.id,
                StudentId: req.params.id2
            }
        })
        .then(data => {
            res.render('subject/formScore', { data: data })
        })
        .catch(err => {
            res.send(err)
        })
})

routes.post('/:id/givescore/:id2', (req, res) => {
    ControllerSubjectStudent.update({ score: req.body.score }, { where: { SubjectId: req.params.id, StudentId: req.params.id2 } })
        .then(() => {
            res.redirect(`/subject/${req.params.id}/enroll-student`)
        })
        .catch(err => {
            res.send(err)
        })
})


module.exports = routes