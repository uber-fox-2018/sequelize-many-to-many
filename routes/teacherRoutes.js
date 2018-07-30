const routes = require('express').Router()
const Controller = require('../controllers/controllers')
const ControllerTeachers = Controller.ControllerTeachers

routes.get('/', function(req, res) {
    ControllerTeachers.showTeachers()
    .then(teachersData => {
        // res.json(teachersData)
        
        res.render('teachersTable', {teachersData})
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/add', function(req, res) {
    ControllerTeachers.showSubjects()
    .then(dataSubjects => {
        // let err = null
        res.render('registerTeacher', {dataSubjects, err: null})
    })
    .catch(err => {
        res.send(err.message)
    })
})

routes.post('/add', function(req, res) {
    let newTeacher = req.body
    // console.log(req.body);
    ControllerTeachers.registerTeacher(newTeacher)
    .then(() => {
        res.redirect('/teachers')
    })
    .catch(err => {
        ControllerTeachers.showSubjects()
        .then(dataSubjects => {
            // res.json(err)
            res.render('registerTeacher', {dataSubjects, err:err})
        })
    })
})

routes.get('/edit/:id', function(req, res) {
    let id = req.params.id
    // console.log(id);
    ControllerTeachers.findOneTeacher(id)
    .then(dataTeacher => {
        ControllerTeachers.showSubjects()
        .then(dataSubjects => {
            res.render('editTeacher', {dataTeacher, dataSubjects, err:null})
        })
        .catch(err => {
            res.send(err.message)
        })
    })
    .catch(err => {
        res.send(err.message)
    })
})

routes.post('/edit/:id', function(req, res) {
    // console.log(req.body)
    let editTeacher = req.body
    let id = req.params.id
    editTeacher.id = id
    // console.log(editTeacher, id);
    
    ControllerTeachers.editTeacher(editTeacher, id)
    .then(msg => {
        res.redirect('/teachers')
    })
    .catch(err => {
        ControllerTeachers.findOneTeacher(id)
        .then(dataTeacher => {
            ControllerTeachers.showSubjects()
            .then(dataSubjects => {
                res.render('editTeacher', {dataTeacher, dataSubjects, err})
            })
        })
        // res.send(err)
    })
})

routes.get('/delete/:id', function(req, res) {
    let id = req.params.id
    // console.log(req.params);
    ControllerTeachers.removeTeacher(id)
    .then(msg => {
        res.redirect('/teachers')
    })
    .catch(err => {
        res.send(err.message)
    })
})

module.exports = routes