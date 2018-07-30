const models = require('../models');
const Subject = models.Subject;
const Teacher = models.Teacher;
const StudentSubject = models.StudentSubject;

module.exports = {
    getAllSubjects : (req, res) =>{
        Subject.findAll({
            order : [["id", "ASC"]],
            include: [Teacher]
        })
        .then(subjectWithTeacher=>{
            res.render("subjects", {subjects:subjectWithTeacher})
            })
            .catch(err=>{
                res.render("error");
            })
    },

    addForm : (req, res) =>{
        res.render("add_subject_form")
    },

    addSubject : (req, res) =>{
        let newSubject = req.body; //e.g. { subjectName: 'Math' }
        Subject.create({
            subjectName : newSubject.subjectName[0].toUpperCase() + newSubject.subjectName.slice(1)
        })
                .then(newSubject =>{
                    res.redirect("/subjects")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    getSubject : (req, res) => {
        let id = req.params.id;
            Subject.findById(id, {include: [Teacher]})
            
                .then(subject=>{
        
                    res.render("edit_subject", {subject : subject})
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    updateSubject : (req, res) =>{
        let subject = req.body;
        let id = req.params.id;
        Subject.update({
            subjectName : subject.subjectName[0].toUpperCase() + subject.subjectName.slice(1)
        }, {
                where: {id: id}
            })
                .then(updatedSubject =>{
                    res.redirect("/subjects")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    deleteSubject: (req, res) =>{
        let id = req.params.id;
        Subject.destroy({
            where: {id : id}
        })
                .then(deletedSubject =>{
                    res.redirect("/subjects");
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    subjectsEnrollment: (req, res) => {
        let id = req.params.id;
        Subject.findAll({
            where : {id:id},
            include: [Student]
        })
        .then(studentSubject=>{
            res.render("subjectEnrollment", { studentSubject: studentSubject, error: null })
        })
        .catch(err=>{
            res.render("subjectEnrollment", { studentSubject: studentSubject, error: err.message })
        })
    },

    studentForScoring : (req, res)=>{
       let id = req.params.studentId ;
       Student.findOne({
           where:{id: id},
           include: [StudentSubject]
       })
       .then(students=>{
           res.render("scoring",{subjectId: req.params.subjectId, studentId: req.params.studentId, students: students, error: null})
       })
       .catch(err=>{
           res.render("scoring", {error:err.message})
       })
    },

    scoring : (req, res) =>{
        let student_id = req.params.studentId
        let subject_id = req.params.subjectId
        StudentSubject.update({
            Score: req.body.Score
        },{
            where:{
                studentId: student_id,
                subjectId: subject_id
            }
        })
        .then(()=>{
            res.redirect(`/subjects/${student_id}/enrolled-students`)
        })
        .catch(err=>{
            res.render("scoring", {studentId: student_id, subjectId: subject_id, error:err.message})
        })
    }

}