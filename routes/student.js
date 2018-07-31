const express = require('express')
const router = express.Router()
const Model = require('../models/')

router.get('/', (req, res) => {
    Model.Student.findAll({
        order: [['id','ASC']],
        include: [Model.Subject]
    })
    .then((dataStudent) => {
        //res.json(dataStudent)
        res.render('student', {dataStudent: dataStudent})
    })
    .catch((err) => {
        res.render(err)
    })
})

router.get('/addstudent', (req,res) => {
    res.render('addstudent', {err: null})
})

router.post('/addstudent', (req, res) => {
    Model.Student.create({
        firstName: req.body.FirstName,
        lastName: req.body.LastName,
        email: req.body.Email
    })

    .then(() => {
        res.redirect('/student')
    })

    .catch(err => {
        res.render('addstudent', {err: err})
    })
})

router.get('/:id/editstudent', (req,res) => {
    Model.Student.findById(req.params.id)
    .then((dataStudent) => {
        Model.Subject.findAll()
        .then((dataSubject) => {
            res.render('editstudent', { dataStudent: dataStudent, dataSubject: dataSubject, err: null })
        })
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/:id/editstudent', (req,res) => {
    Model.Student.update({
        firstName: req.body.FirstName,
        lastName: req.body.LastName,
        email: req.body.Email,
    },
    {
        where: { id: req.params.id }
    })

    .then(() => {
        res.redirect('/student')
    })

    .catch(err => {
        res.send(err)
    })
})

router.get('/deletestudent/:id', (req, res) => {
    Model.Student.destroy({ where: { id: req.params.id }})
    .then(() => {
        res.redirect('/student')
    })

    .catch(err => {
        res.send(err)
    })
})

router.get('/:id/addsubject', (req, res) => {
    Model.Student.findById(req.params.id)
    .then((dataStudent) => {
        Model.Subject.findAll()
        .then((dataSubject) => {
            res.render('addsubject', {dataStudent: dataStudent, dataSubject: dataSubject, err: null})
        })
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/:id/addsubject', (req,res) => {
    Model.Subject_Student.create({
        StudentId: req.params.id,
        SubjectId: req.body.SubjectId
    })
    .then(()=> {
        res.redirect('/student')
    })
})


module.exports = router

