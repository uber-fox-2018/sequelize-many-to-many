const model = require('../../models')
const Student = model.Student
const Subject = model.Subject
const Enrollment = model.Enrollment

const formHandler = (res, student, validationErrors) => {
    Subject
        .findAll()
        .then(subjects => {
            res.render('students/add_subject', { student, subjects, validationErrors })
        })
}

get = (req, res) => {
    Student
        .findById(req.params.id, { include: ['Subjects'] })
        .then(student => {
            formHandler(res, student, [])
        })
}

post = (req, res) => {
    const id = req.params.id
    Student
        .findById(id, { include: ['Subjects'] })
        .then(student => {
            Subject
                .findById(req.body.subject_id)
                .then(subject => {
                    student.addSubject(subject)
                    res.redirect(`/students/${id}/add-subject`)
                })
                .catch(err => {
                    err.json(err)
                })
        })
}

module.exports = { get, post }