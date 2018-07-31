const routes = require('express').Router()
const Controller = require('../controllers/controllers')
const ControllerSubjects = Controller.ControllerSubjects

routes.get('/', function(req, res) {
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

routes.get('/:id/give-score', function(req, res) {
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


module.exports = routes