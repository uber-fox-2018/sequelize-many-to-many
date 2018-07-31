const routes = require('express').Router()
const Controller = require('../../controllers/student')
const Models = require('../../models')

routes.get('/', function (req, res) {
    Controller.showAll()
        .then(function (student) {
            // res.send(student)
            res.render('./students/showTable', { dataStudent: student })
        })
        .catch(function (err) {

        })
})

routes.post('/', function (req, res) {

    res.send('ini post teacher')
})

routes.get('/add', function (req, res) {
    Controller.showSubject()
        .then(function (subject) {
            res.render('./students/addForm', { dataSubject: subject })
        })
        .catch(function () {

        })
    // res.send('ini form teacher')

})

routes.post('/add', function (req, res) {
    Controller.add(req.body.fname, req.body.lname, req.body.email, req.body.subjectId)
    res.redirect('/teachers')
    // res.send('ini form teacher')

})

routes.get('/edit/:id', function (req, res) {
    Controller.showById(req.params.id)
        .then(function (student) {
            Controller.showSubject()
                .then(function (subject) {
                    res.render('./teacher/editForm', { dataStudent: student, dataSubject: subject, err: null })
                })
        })
})

routes.post('/edit/:id', function (req, res) {
    // console.log(req.body);

    Controller.update(req.body.fname, req.body.lname, req.body.email, req.body.subjectId, req.params.id)
        .then(function () {
            res.redirect('/teachers')
        })
        .catch(function (err) {
            Controller.showById(req.params.id)
                .then(function (student) {
                    Controller.showSubject()
                        .then(function (subject) {
                            res.render('./students/editForm', { dataStudent: student, dataSubject: subject, err: err })
                        })
                })
            // res.render('./teacher/editForm', { dataTeacher: teacher, dataSubject: subject, err: err })
        })
    // res.send('ini form edit teacher')
})

routes.get('/delete/:id', function (req, res) {
    Controller.delete(req.params.id)
    res.redirect('/students')

})

routes.get('/:id/addSubject',function(req,res){
    Controller.showById(req.params.id)
    .then(function(student){
        Controller.showSubject()
        .then(function(subject){
            res.render('./students/showTableSubject',{dataStudent:student,dataSubject:subject})
        })
    })
})

routes.post('/:id/addSubject',function(req,res){
    // Models.StudenSubject
    // .create({
    //     SubjectId: req.body.subjectId,
    //     StudentId:req.params.id
    // })
    Controller.addSubject(req.params.id,req.body.subjectId)
    res.redirect('/subjects')
})

module.exports = routes
