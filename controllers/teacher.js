const models  = require('../models')

const Student = models.Student
const Teacher = models.Teacher
const Subject = models.Subject
const StudentSubject = models.StudentSubject

class teacherHandler {
    static show(req, res){
        Teacher.findAll({
            include : [{
                model : Subject
            }]
        })
        .then( teachers => {
            res.render('page_teacher.ejs', {teacher : (teachers)})
        })
    }

    static add(req, res){
        res.render('page_teacher_add.ejs')
    }

    static addPost(req, res) {
        let dataTeacher = {
            first_name : req.body.first_name,
            last_name  : req.body.last_name,
            email      : req.body.email
        }
    
        Teacher.create(dataTeacher)
        .then(()=>{
            res.redirect('/teacher')
        })
        .catch( err => {
            res.send(err.errors[0].message)
        })
    }

    static delete(req,res) {
        let idTeacher = req.params.id

        Teacher.destroy({
            where : {id: idTeacher}
        })
        .then(()=>{
            res.redirect('/teacher')
        })
        .catch( err => {})
    }

    static update(req,res) {
        Teacher.findAll({
            where : {id : req.params.id},
            include : [{
                model : Subject
            }]
        })
        .then(teachers => {
            res.render('page_teacher_update.ejs', { teacher : (teachers)})
        })
    }

    static updatePost(req,res) {
        let dataTeacher = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            subjectId : req.body.subject,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Teacher.update(dataTeacher, {where : {id : req.body.data_id}})
        .then(()=>{
            res.redirect('/teacher')
        })
        .catch( err => {})
    }

}

module.exports = teacherHandler