'use strict'
const express = require('express')
const router = express.Router()
const ControllerSubject = require('../controllers/controllerSubject')
const ControllerStudentSubject = require('../controllers/controllerStudentSubject')

router.get('/', (req, res ) => {
    ControllerSubject.showSubject()
    .then((subject) => {
        res.render('subject', {subject: subject})
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/:id/enrolled', (req, res) => {
    ControllerStudentSubject.showStudentSubject (req.params.id)
    .then((result) => { 
        // res.json(result)
        res.render('enrolled', {result: result})
    }).catch((err) => {
        console.log(err);
    }); 
})

router.post('/:id/enrolled', (req, res) => {
    ControllerStudentSubject.updateStudentSubject (req.params.id, req.body.score)
    .then((result) => { 
        res.json(result)
        res.render('enrolled', {result: result})
    }).catch((err) => {
        console.log(err);
    }); 
})

router.get('/:id/givescore', (req, res) => {
    res.render('giveScore', {message: null, err: null})
})


router.post('/add', (req, res) => {
    ControllerSubject.createSubject(req.body.name)
    .then(() => {
        res.render('addSubject', {message: 'Subject data has been saved successfully', err: null})
    }).catch((err) => {
        res.render('addSubject', {message: null, err: err.message})
    });
})

router.get('/edit/:id', (req, res) => {
    ControllerSubject.getSubject(req.params.id)
    .then((subject) => {
        res.render('editSubject', {subject: subject, message: null, err: null})
    })
    .catch((err) => {
        res.render('editSubject', {subject: null, message: null, err: err.message}) 
    });
})

router.post('/edit/:id', (req, res) => {
    ControllerSubject.updateSubject(req.params.id,req.body.name)
    .then(() => {
        ControllerSubject.getSubject(req.params.id)
        .then((subject) => {
            res.render('editSubject', {subject: subject, message:'Subject data has been updated successfully', err: null})  
        })
        .catch((err) => {
            res.render('editSubject', {subject: null, message: null, err: err.message}) 
        })
    })
    .catch((err) => {
        ControllerSubject.getSubject(req.params.id)
        .then((subject) => {
            res.render('editSubject', {subject: subject, message: null, err: err.message})  
        })
    })
})

router.get('/delete/:id', (req, res) => {
    ControllerSubject.deleteSubject(req.params.id)
    .then(() => {
        res.redirect('/subject')
    })
})


module.exports = router