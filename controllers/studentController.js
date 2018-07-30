const models = require('../models');
const Student = models.Student;
const Subject = models.Subject;
const StudentSubject = models.StudentSubject;

module.exports = {

    showStudents: (req, res) => {
        Student.findAll({
            order: [['id', 'ASC']],
            include: [models.Subject]
        })
            .then(studentsData => {
                res.render('./students/students', { title: `Students List`, studentsData: studentsData, error: null });
            })
            .catch(err => {
                res.send(err.message);
            })
    },

    getFormAdd: (req, res) => {
        Student.findAll({
            order: [['id', 'ASC']]
        })
            .then(students => {
                res.render('./students/studentadd', { title: `Student's Form`, students: students, error: null });
            })
            .catch(err => {
                res.render('./students/studentadd', { title: `Student's Form`, error: err.message });
            })
    },

    addStudent: (req, res) => {
        Student.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            SubjectId: req.body.SubjectId
        })
            .then(() => {
                res.redirect('/students');
            })
            .catch(err => {
                res.render('./students/studentadd', { title: `Student's Form`, error: err.message });
            })
    },

    getStudent: (req, res) => {
        Student.findById(req.params.id)
            .then(editStudent => {
                res.render('./students/studentedit', { title: `Edit Student's Data`, editStudent: editStudent, error: null });
            })
            .catch(err => {
                res.render('./students/studentedit', { title: `Edit Student's Data`, editStudent: editStudent, error: err.message });
            })
    },

    updateStudent: (req, res) => {
        Student.update({
            id: req.params.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }, {
                where: { id: req.params.id }
            })
            .then(() => {
                res.redirect('/students');
            })
            .catch(err => {
                let editStudent = {
                    id: req.params.id,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email
                }
                res.render('./students/studentedit', {title: `Student's Form`, editStudent: editStudent, error: err.message});
            })
    }, 

    deleteStudent: (req, res) => {
        Student.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/students');
        })
        .catch(err => {
            res.send(err);
        })
    }, 

    getStudentSubject: (req, res) => {
        Student.findById(req.params.id)
        .then(studentsData => {
            Subject.findAll()
            .then(subjectsData => {
                res.render('./students/addsubject', {studentsData: studentsData, subjectsData: subjectsData, error: null});
            })
            .catch(err => {
                res.render('./students/addsubject', {error: err.message});
            })
        })
    }, 

    addSubjectToStudent: (req, res) => {
        StudentSubject.create({
            StudentId: req.params.id,
            SubjectId: req.body.SubjectId
        })
        .then(() => {
            res.redirect('/students');
        })
        .catch(err => {
            res.render('./students/addsubject', {error: err.message});
        })
    }

}