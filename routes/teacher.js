'use strict'
const express = require('express')
const router = express.Router()
const ControllerTeacher = require('../controllers/controllerTeacher')
const ControllerSubject = require('../controllers/controllerSubject')

router.get('/', (req, res) => {
    ControllerTeacher.showTeacher()
    .then((teacher) => {
        res.render('teacher', {teacher: teacher})
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/add', (req, res) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        res.render('addTeacher', {subject: subject, message: null, err: null})
    })
    .catch((err) => {
        res.render('addTeacher', {subject: subject, message: null, err: err.message})
    });
})

router.post('/add', (req, res) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        ControllerTeacher.createTeacher(req.body.firstName, req.body.lastName, req.body.email, req.body.SubjectId)
        .then(() => {
            res.render('addTeacher', {subject: subject, message: 'Teacher data has been saved successfully', err: null})
        })
        .catch((err) => {
            res.render('addTeacher', {subject: subject, message: null, err: err.message})
        });
    }) 
})

router.get('/edit/:id', (req, res) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        ControllerTeacher.getTeacher(req.params.id)
        .then((teacher) => {
            res.render('editTeacher', {subject: subject, teacher: teacher, message: null, err: null})
        }).catch((err) => {
            res.render('editTeacher', {subject: subject, teacher: teacher, message: null, err: err.message}) 
        });
    })    
})

router.post('/edit/:id', (req, res) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        ControllerTeacher.updateTeacher(req.params.id,req.body.firstName,req.body.lastName,req.body.email, req.body.SubjectId)
        .then(() => {
            res.redirect('/teacher')  
        })
        .catch((err) => {
            res.render('editTeacher', {subject: [], teacher: [], message: null, err: err.message}) 
        })
    })
})

router.get('/delete/:id', (req, res) => {
    ControllerTeacher.deleteTeacher(req.params.id)
    .then(() => {
        res.redirect('/teacher')
    })
})

module.exports = router