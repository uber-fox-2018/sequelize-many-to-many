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

module.exports = routes