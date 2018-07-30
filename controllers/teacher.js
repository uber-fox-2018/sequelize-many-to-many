const models = require('../models');
const Teacher = models.Teacher;
module.exports = {
    getAllTeachers : (req, res) =>{
        Teacher.findAll({
            order: [['id', 'ASC']],
            include: [models.Subject]
        })
        .then(teacherWithSubject=>{
            res.render("teachers", {teachers: teacherWithSubject})
        })
        .catch(err =>{
            res.render("error");
        })
    },

    addForm : (req, res) =>{
        res.render("add_teacher_form", {teacher:undefined})
    },

    addTeacher : (req, res) =>{
        let newTeacher = req.body; //e.g. { first_name: 'susan',last_name: 'nio' }
        Teacher.create({
            firstName : newTeacher.firstName[0].toUpperCase() + newTeacher.firstName.slice(1),
            lastName : newTeacher.lastName[0].toUpperCase() + newTeacher.lastName.slice(1),
            email : newTeacher.email,
            subjectId : newTeacher.subjectId
        })
                .then(newTeacher =>{
                    res.redirect("/teachers")
                })
                .catch(err =>{
                    res.render("add_teacher_form", {teacher: newTeacher, err:err});
                })
    },

    getTeacher : (req, res) => {
        let id = req.params.id;
            Teacher.findById(id)
                .then(teacher=>{
                    res.render("edit_teacher", {teacher : teacher})
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    updateTeacher : (req, res) =>{
        let teacher = req.body;
        let id = req.params.id;
        Teacher.update({
            firstName : teacher.firstName[0].toUpperCase() + teacher.firstName.slice(1),
            lastName : teacher.lastName[0].toUpperCase() + teacher.lastName.slice(1),
            email : teacher.email,
            subjectId : teacher.subjectId
        }, {
                where: {id: id}
            })
                .then(updatedTeacher =>{
                  
                    res.redirect("/teachers")
                })
                .catch(err =>{
                    
                    res.render("error");
                })
    },

    deleteTeacher : (req, res) =>{
        let id = req.params.id;
        Teacher.destroy({
            where: {id : id}
        })
                .then(deletedTeacher =>{
                    res.redirect("/teachers");
                })
                .catch(err =>{
                    res.render("error");
                })
    }
}