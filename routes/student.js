const router = require('express').Router()
const models = require('../models')
const Student = models.Student

router.get('/',(req,res) => {
    Student.findAll()
    .then((data_students) => {
        res.render('../views/student/student',{data_students: data_students, err: null})
    })
    .catch((err) => {
        res.render('../views/student/student',{data_students: null, err: err})
    })
})

router.get('/add', (req,res) => {
    Student.findAll()
    .then((data_student) => {
        res.render('../views/student/add-student', {err: null, data_student: data_student})
    })
    .catch((err) => {
        res.render('../views/student/add-student', {err: err, data_student: null})
    })
})

router.post('/add', (req,res) => {
    Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    })
    .then(() => {
        res.redirect('/students')
    })
    .catch((err) => {
        res.render('../views/student/add-student', {err: err, data_student: null})
    })
})

router.get('/:id/add-subject', (req,res) => {
    let student = null
    Student.findById(req.params.id)
    .then((data_student) => {
        student = data_student
        return models.Subject.findAll()
    })
    .then((data_subjects) => {
        res.render('../views/student/add-subject-to-student', {data_student: student, data_subjects: data_subjects, err: null})
    })
})

router.post('/:id/add-subject', (req,res) => {
    models.StudentSubject.create({
        StudentId: req.params.id,
        SubjectId: req.body.SubjectId
    })
    .then(() => {
        res.redirect('/students')
    })
})


router.get('/:id/edit',(req,res) => {
    Student.findById(req.params.id)
    .then((data_student) => {
        res.render('../views/student/edit-student', {data_student: data_student,err: null})
    })
})

router.post('/:id/edit', (req,res) => {
    Student.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    },{where: {id: req.params.id}})
    .then(() => {
        res.redirect('/students')
    })
    .catch((err) => {
        res.render('../views/student/edit-student', {data_student: [],err: err})
    })
})

router.get('/:id/delete', (req,res) => {
    Student.destroy({
        where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/students')
    })
})

module.exports = router