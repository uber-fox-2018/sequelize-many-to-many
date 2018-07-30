const models = require('../models');
const Student = models.Student;
const Subject = models.Subject;
const StudentSubject = models.StudentSubject;
module.exports = {
    getAllStudents : (req, res) =>{
        Student.findAll({order: [['id', 'ASC']]})
                .then(studentsData=>{
                    res.render("students", {students : studentsData})
                })
                .catch(err => {
                    res.render("error");
                 })
    },

    addForm : (req, res) =>{
        res.render("add_Form")
    },

    addStudent : (req, res) =>{
        let newStudent = req.body; //e.g. { first_name: 'susan',last_name: 'nio', email: 'susan@gmail.com' }
        Student.create({
            first_name : newStudent.first_name[0].toUpperCase() + newStudent.first_name.slice(1),
            last_name : newStudent.last_name[0].toUpperCase() + newStudent.last_name.slice(1),
            email : newStudent.email
        })
                .then(newStudent =>{
                    res.redirect("/students")
                })
                .catch(err =>{
                    res.send(err.message);
                })
    },

    getStudent : (req, res) => {
        let id = req.params.id;
            Student.findById(id)
                .then(student=>{
                    res.render("edit_student", {student : student})
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    updateStudent : (req, res) =>{
        let student = req.body;
        let id = req.params.id;
        Student.update({
            first_name : student.first_name[0].toUpperCase() + student.first_name.slice(1),
            last_name : student.last_name[0].toUpperCase() + student.last_name.slice(1),
            email : student.email
        }, {
                where: {id: id}
            })
                .then(updatedStudent =>{
                    res.redirect("/students")
                })
                .catch(err =>{
                    res.send(err.message);
                })
    },

    deleteStudent : (req, res) =>{
        let id = req.params.id;
        Student.destroy({
            where: {id : id}
        })
                .then(deletedStudent =>{
                    res.redirect("/students");
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    getStudentSubject : (req, res)=>{
        let id = req.params.id;
        Student.findById(id)
            .then(student=>{
                Subject.findAll()
                    .then(subjects=>{
                        res.render("addSubject", {student:student, subjects:subjects, error:null})
                    })
                    .catch(err=>{
                        res.render("addSubject", {error : err.message})
                    })
            })

    },

    addSubjectToStudent: (req, res)=>{
        StudentSubject.create({
            studentId: req.params.id,
            subjectId: req.body.subjectId
        })
        .then(()=>{
            res.redirect("/students")
        })
        .catch(err=>{
            res.render("addSubject", {error:err.message})
        })
    }

}