const models = require('../models');
const Teacher = models.Teacher;
const Subject = models.Subject;

module.exports = {

    showTeachers: (req, res) => {
        Teacher.findAll({
            order: [['id', 'ASC']],
            include: [models.Subject]
        })
        .then(teachersData => {
            res.render('./teachers/teachers', {title: `Teachers List`, teachersData: teachersData, error: null});
        })
        .catch(err => {
            res.send(err.message);
        })
    },

    getFormAdd: (req, res) => {
        Subject.findAll({
            order: [['id', 'ASC']]
        })
        .then(subjects => {
            res.render('./teachers/teacheradd', {title: `Teacher's Form`, subjects: subjects, error: null});
        })
        .catch(err => {
            res.render('./teachers/teacheradd', {title: `Teacher's Form`, error: err.message});
        })
        
    },

    addTeacher: (req, res) => {
        // console.log(req.body);
        Teacher.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            SubjectId: req.body.SubjectId
        })
        .then(teacherData => {
            res.redirect('/teachers');
        })
        .catch(err => {
            res.render('./teachers/teacheradd', {title: `Teacher's Form`, error: err.message});
        })
    },

    getTeacher: (req, res) => {
        Teacher.findById(req.params.id)
        .then(editTeacher => {
            res.render('./teachers/teacheredit', {title: `Edit Teacher's Data`, editTeacher: editTeacher, error: null});
        })
        .catch(err => {
            res.render('./teachers/teacheredit', {title: `Edit Teacher's Data`, editTeacher: editTeacher, error: err.message})
        })
    },

    updateTeacher: (req, res) => {
        Teacher.update({
            id: req.params.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            SubjectId: req.body.SubjectId
        }, {
            where: {id: req.params.id}
        })
        .then(() => {
            res.redirect('/teachers');
        })
        .catch(err => {
            let editTeacher = {
                id: req.params.id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                SubjectId: req.body.SubjectId
            }
            res.render('./teachers/teacheredit', {title: `Teacher's Form`, editTeacher: editTeacher, error: err.message});
        })
    },

    deleteTeacher: (req, res) => {
        Teacher.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/teachers');
        })
        .catch(err => {
            res.send(err);
        })
    }

}