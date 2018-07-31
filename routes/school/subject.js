const express = require('express')
const routes = express()
const model = require('../../models')
const teacher = model.Teacher
const subject = model.Subject
const student = model.Student
const enroll = model.StudentCon
const helpGetScore = require('../../helper/scorehelper')

routes.get('/subjects', (req, res) => {
    //res.send('Data teacher')
    subject.findAll({
            include: [{
                model: teacher

            }, {
                model: student

            }]
        })
        .then(subjects => {
            //res.send(subjects)
            res.render('showAllSubjects.ejs', {
                subjects,
                student
            })
        })

})
routes.get('/subjects/:id/enrolled-students', (req, res) => {
    subject.findById(req.params.id, {
            include: ['Students']
        })
        .then(subjects => {
            //res.send(subjects)
            res.render('addScore.ejs',{subjects,helpGetScore})
        })
})

routes.get('/subjects/addScore/:id', (req, res) => {
    
    enroll.findById(req.params.id)
    .then( (student) => {
        //res.send(student)
       res.render('addScoreStudent',{student:student})
    })
})

routes.post('/subjects/addScore/:id', (req, res) => {
    //res.send(req.params.id)
//    res.send(req.body)
    enroll.update({
        score : req.body.score
    }, {
        where : {studentId : req.params.id}
    })
    .then( () => res.redirect('/subjects'))
})


module.exports = routes