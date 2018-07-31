const models = require('../models');
const Subject = models.Subject;
const Student = models.Student;
const StudentSubject = models.StudentSubject;
const scoreHelper = require('../helpers/scoregradehelper');

module.exports = {

    showSubjects: (req, res) => {
        Subject.findAll({
            order: [['id', 'ASC']],
            include: [models.Teacher]
        })
            .then(subjectsData => {
                res.render('./subjects/subjects', { title: `List of Subjects`, subjectsData: subjectsData, error: null });
            })
            .catch(err => {
                res.send(err);
            })
    },

    getFormAdd: (req, res) => {
        res.render('./subjects/subjectadd', { title: `Add Subject Form` });
    },

    addSubject: (req, res) => {
        Subject.create({
            subjectName: req.body.subjectName
        })
            .then(subjectData => {
                res.redirect('/subjects');
            })
            .catch(err => {
                res.render('./subjects/subjectadd', { title: `Add Subject Form`, error: err.message });
            })
    },

    getSubject: (req, res) => {
        Subject.findById(req.params.id)
            .then(editSubject => {
                res.render('./subjects/subjectedit', { title: `Edit Subject Name`, editSubject: editSubject });
            })
            .catch(err => {
                res.send(err);
            })
    },

    updateSubject: (req, res) => {
        Subject.update({
            id: req.params.id,
            subjectName: req.body.subjectName
        }, {
                where: { id: req.params.id }
            })
            .then(() => {
                res.redirect('/subjects');
            })
            .catch(err => {
                res.send(err);
            })
    },

    deleteSubject: (req, res) => {
        Subject.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.redirect('/subjects');
            })
            .catch(err => {
                res.send(err);
            })
    },

    getSubjectsforEnrollment: (req, res) => {
        Subject.findAll({
            where: { id: req.params.id },
            include: [models.Student]
        })
            .then(studentsubjectData => {
                // console.log('----1-----', studentsubjectData[0])
                // console.log('-----2----', studentsubjectData[0].Students[0])
                // console.log('------3---', studentsubjectData[0].Students[0].StudentSubject)
                res.render('./studentsubjects/studentsubjects', { studentsubjectData: studentsubjectData, error: null });
            })
            .catch(err => {
                res.send('./studentsubjects/studentsubjects', {studentsubjectData: studentsubjectData, error: err.message });
            })
    },

    getStudentForScoring: (req, res) => {
        // console.log(req.params.idSubject)
        // console.log(req.params.idStudent)
        Student.findOne({
            where: {
                id: req.params.idStudent,
            },
            include: [models.StudentSubject]
        })
            .then(students => {
                res.render('./subjects/givescore', { 
                    title: `Give Score`, 
                    SubjectId: req.params.idSubject, 
                    StudentId: req.params.idStudent, 
                    students: students,
                    scoreHelper: scoreHelper,
                    error: null })
            })
            .catch(err => {
                res.render('./subjects/givescore', { title: `Give Score`, error: err.message });
            })
    },

    giveScore: (req, res) => {
        StudentSubject.update({
            Score: req.body.Score
        }, {
                where: {
                    SubjectId: req.params.idSubject,
                    StudentId: req.params.idStudent
                }
            })
            .then(() => {
                res.redirect(`/subjects/${req.params.idSubject}/enrolled-students`);
            })
            .catch(err => {
                res.render('./subjects/givescore', { title: `Give Score`, SubjectId: req.params.idSubject, StudentId: req.params.idStudent, error: err.message });
            })
    }
}