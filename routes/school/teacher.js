const express = require('express')
const routes = express()
const model = require('../../models')
const teacher = model.Teacher
const subject = model.Subject
const bodyParser = require('body-parser')
routes.use(bodyParser.json()); // for parsing application/json
routes.use(bodyParser.urlencoded({
    extended: true
}));
routes.get('/teachers', (req, res) => {
    //res.send('Data teacher')
    teacher.findAll({

            include: [{
                model: subject,

            }],
            order: [
                ['id', 'DESC']
            ]
        })
        .then(teachers => {
            teachers.forEach(element => {
                console.log(element.dataValues.Subject)
            });
            res.render('showAllTeachers.ejs', {
                teachers
            })
        })

})

routes.post('/teachers/edit/:id', (req, res) => {


    teacher.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            subjectId: req.body.subjectId
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {

            res.redirect("/teachers")
        })
        .catch(err => {
            let teacher = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                subjectId: req.body.subjectId,
                id: req.params.id
            }

            res.render("editTeacher.ejs", {
                teacher,
                validationErrors: err.errors[0].type
            })
        })

})

routes.get('/teachers/edit/:id', (req, res) => {
    teacher.findById(req.params.id)
        .then(teacher => {
            //console.log(teacher)
            res.render('editTeacher.ejs', {
                teacher,
                validationErrors: []
            })
        })

})
routes.get('/teachers/delete/:id', (req, res) => {
    teacher.findById(req.params.id)
        .then(teacher => {
            teacher.destroy().then(() => {
                res.redirect('/teachers', )
            })

        })

})
routes.get('/teachers/add', (req, res) => {

    res.render('addTeacher.ejs', {
        validationErrors: []
    })
})
routes.post('/teachers/add', (req, res) => {


    teacher.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            subjectId: req.body.subjectId
        }).then(() => {

            res.redirect("/teachers")
        })
        .catch(err => {

            res.render("addTeacher.ejs", {
                validationErrors: err.errors[0].type
            })
        })

})
module.exports = routes