'use strict'
const express = require('express')
const router = express.Router()
const ControllerStudent =require('../controllers/controllerStudent')
const ControllerSubject = require('../controllers/controllerSubject')
const ControllerStudentSubject = require('../controllers/controllerStudentSubject')

router.get('/', (req, res) => {
    ControllerStudent.showStudent()
    .then((dataStudent) => {
        res.render('student', {dataStudent: dataStudent})
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/add', (req, res) => {
    res.render('addStudent', {message: null, err: null})
})

router.post('/add', (req, res) => {
    ControllerStudent.createStudent(req.body.firstName, req.body.lastName, req.body.email)
    .then(() => {
        res.render('addStudent', {message: 'Student data has been saved successfully', err: null})
    }).catch((err) => {
        console.log(err.message);
        res.render('addStudent', {message: null, err: err.message})
    });
    
})

router.get('/edit/:id',(req,res) => {
    ControllerStudent.getStudent(req.params.id)
    .then((student) => {
        res.render('editStudent', {student: student, message: null, err: null})  
    })
    .catch((err) => {
        res.render('editStudent', {student: null, message: null, err: err.message}) 
    })
})

router.post('/edit/:id', (req,res) => {
    ControllerStudent.updateStudent(req.params.id,req.body.firstName,req.body.lastName,req.body.email)
    .then(() => {
        ControllerStudent.getStudent(req.params.id)
        .then((student) => {
            res.render('editStudent', {student: student, message:'Student data has been updated successfully', err: null})  
        })
        .catch((err) => {
            res.render('editStudent', {student: null, message: null, err: err.message}) 
        })
    })
    .catch((err) => {
        ControllerStudent.getStudent(req.params.id)
        .then((student) => {
            res.render('editStudent', {student: student, message: null, err: err.message})  
        })
    })
})

router.get('/delete/:id', (req, res) => {
    ControllerStudent.deleteStudent(req.params.id)
    .then(() => {
        res.redirect('/student')
    })
})

router.get('/:id/addsubject',(req,res) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        ControllerStudent.getStudent(req.params.id)
        .then((student) => {
            res.render('addStudentSubject', {subject: subject, student: student, message: null, err: null})  
        })
        .catch((err) => {
            res.render('addStudentSubject', {subject: subject, student: null, message: null, err: err.message}) 
        })
    })
})

router.post('/:id/addsubject', (req, res) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        ControllerStudentSubject.createStudentSubject(req.params.id, req.body.SubjectId)
        .then(() => {
            res.redirect('/student')  
        })
        .catch((err) => {
            res.render('addStudentSubject', {subject: [], student: [], message: null, err: err.message}) 
        })
    })
})

module.exports = router