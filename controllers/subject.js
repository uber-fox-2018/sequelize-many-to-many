const models  = require('../models')

const Student = models.Student
const Teacher = models.Teacher
const Subject = models.Subject
const StudentSubject = models.StudentSubject

class subjectHandler {

    static show(req, res){
        Subject.findAll({
            include : [{
                model : Teacher
            }]
        })
        .then( subjects => {
            res.render('page_subject_teacher.ejs', {subject : subjects})
            // res.send(subjects)
        })
        .catch(err=>{})
    }

    static showStudentSubject(req, res){
        Student.findById(req.params.id, {
            include : [{
                model : Subject
            }]
        })
        .then(students => {
            Subject.findAll()
            .then( subjects => {
                res.render('page_subject_student.ejs', { student : students, subject : subjects})
            })
            .catch(err=>{})
            
        })
    }

    static addStudentSubject(req, res){
        let studentSubject = {
            StudentId : req.body.student_id,
            SubjectId : req.body.subject_name
        }
        StudentSubject.create(studentSubject)
        .then(()=>{
            res.redirect('/student')
        })
        .catch(err=>{})
    }

    static dataSubject(req,re){

    }
    
}

module.exports = subjectHandler