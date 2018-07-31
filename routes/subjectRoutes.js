const router = require('express').Router()
const Controller = require('../controllers/controllers')
const ControllerSubjects = Controller.ControllerSubjects
const ControllerStudents = Controller.ControllerStudents

router.get('/', function(req, res) {
    // res.send('masuk subject')
    ControllerSubjects.showSubjects()
    .then(dataSubjects => {
        // res.send(data)
        res.render('subjects', {dataSubjects})
    })
    .catch(err => {
        res.send(err.message)
    })
})

router.get('/:id/enrolled-students', function(req, res) {
    // res.send('masuk')
    let id = req.params.id
    ControllerStudents.enrolledStudents()
        .then(dataSubjectStudents => {
            res.render('enrolledStudents', {dataSubjectStudents, id})
            // res.json(dataSubjectStudents)
        })
        .catch(err => {
            res.send(err)
        })
})


router.get('/:id/give-score/:studentId', function(req, res) {
    // console.log('masuk');
    let id = req.params.id
    // console.log(req.body);
    ControllerSubjects.showScore(id)
    .then(dataSubjectStudents => {
        // res.json(dataSubjectStudents)
        res.render('giveScore', {dataSubjectStudents, id})
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/:id/give-score/:studentId', function(req, res) {
    let id = req.params.id
    let studentId = req.params.studentId
    let score = req.body.score
    // res.send(req.body)
    // console.log(id, studentId, score);
    
    ControllerSubjects.giveScore(score, id ,studentId)
    .then(msg => {
        // res.json(data)
        res.redirect(`/subjects/${id}/give-score/${studentId}`)
    })
    .catch(err => {
        res.send(err)
    })
})


module.exports = router