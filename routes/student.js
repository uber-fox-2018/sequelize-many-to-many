const routes           = require('express').Router()
const studentHandler   = require('../controllers/student')
const bodyParser       = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({
    extended : false
})

//semenetara
const models  = require('../models')
const Student = models.Student
const Subject = models.Subject
const SubjectStudent = models.StudentSubject
//==========

// READ DATA
routes.get('/', (req, res) => {
    Student.findAll()
    .then( students => {
        res.render('page_student.ejs', {student : (students)})
        // res.send(students)
    })
})

// UPDATE DATA
routes.get('/:id/update', (req,res) => {
    Student.findById(req.params.id, {
        include : [{
            model : Subject
        }]
    })
    .then(students => {
        Subject.findAll()
        .then( subjects => {
            res.render('page_student_update.ejs', { student : students, subject : subjects})
            // res.send(subjects)
        })
        
    })
})

routes.post('/update', urlEncodedParser, (req,res) => {
    let dataStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Student.update(dataStudent, {where : {id : req.body.data_id}})
    .then(()=>{
        Subject.update(dataStudent, {where : {id : req.body.data_id}})
        res.redirect('/student')
    })
    .catch( err => {
        console.log(err)
    })
})


// DELETE DATA
routes.get('/:id/delete', (req,res) => {
    let idStudent = req.params.id

    Student.destroy({
        where : {id: idStudent}
    })
    .then(()=>{
        res.redirect('/student')
    })
    .catch( err => {})
})


module.exports = routes
