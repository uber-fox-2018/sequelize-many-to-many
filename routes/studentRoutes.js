const router = require('express').Router()
const Controller = require('../controllers/controllers')
const ControllerStudents = Controller.ControllerStudents


router.get('/', function(req, res) {
    // res.send('connect student')
    ControllerStudents.showStudents()
    .then(dataStudents => {
        res.render('studentsTable', {dataStudents})
        // res.render()
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/add', function(req, res) {
    // ControllerStudents.registerStudent()
    res.render('registerStudent')
})

router.post('/add', function(req, res) {
    // console.log(req.body);
    let newData = req.body
    ControllerStudents.registerStudent(newData)
    .then(msg => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/edit/:id', function(req, res) {
    let id = req.params.id
    ControllerStudents.findStudent(id)
    .then(dataStudent => {
        res.render('editStudent', {dataStudent})
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/edit/:id', function(req, res) {
    let modifiedData = req.body
    let id = req.params.id
    modifiedData.id = id
    ControllerStudents.editStudent(modifiedData, id)
    .then(msg => {
        res.redirect('/students')
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/delete/:id', function(req, res) {
    let id = req.params.id
    ControllerStudents.removeStudent(id)
    .then(msg => {
        res.redirect('/students')
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/:id/add-subject', function(req, res) {
    let id = req.params.id
    ControllerStudents.findStudent(id)
    .then(dataStudents => {
        ControllerStudents.showSubjects()
        .then(dataSubjects => {
            res.render('addSubjectToStudent', {dataStudents, dataSubjects})
        })
        .catch(err => {
            res.json(err)
        })
    })
    .catch(err => [
        res.json(err)
    ])
})

router.post('/:id/add-subject', function(req, res) {
    // console.log(req.body);
    let idObj = {
        StudentId: req.params.id,
        SubjectId: req.body.SubjectId
    }
    // console.log(idObj);
    ControllerStudents.addSubjectToStudent(idObj)
    .then(msg => {
        res.redirect('/students')
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/:id/enrolled-students', function(req, res) {
    console.log('masuk');
    ControllerStudents.enrolledStudents()
    .then(dataSubjectStudents => {
        // res.json(dataSubjectStudents)
        let id = req.params.id
        res.render('enrolledStudents', {dataSubjectStudents, id})
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router