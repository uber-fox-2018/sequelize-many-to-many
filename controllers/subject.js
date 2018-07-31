const models = require('../models');
const Subject = models.Subject;
const Teacher = models.Teacher;
const Student = models.Student;
const StudentSubject = models.StudentSubject;

module.exports = {
    getAllSubjects : (req, res) =>{
        Subject.findAll({
            order : [["id", "ASC"]],
            include: [Teacher]
        })
        .then(subjectData=>{
            res.render("subject/subjects", {subjects:subjectData})
            })
            .catch(err=>{
                res.render("error");
            })
    },

    addForm : (req, res) =>{
        res.render("subject/add_subject_form")
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
        
                    res.render("subject/edit_subject", {subject : subject})
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
        let subjectId = req.params.id;
        Subject.findAll({
            include: [Student],
            where: { id: subjectId },
            
        })
        .then(studentSubject=>{
            let subject = studentSubject[0];
            res.render("subject/subjectEnrollment", { subject:subject});
        })
        .catch(err=>{
            res.render('error')
            // res.render("subjectEnrollment", { studentSubject: studentSubject, error: err.message })
        })
    },
   

    studentForScoring : (req, res)=>{   
       let subjectId = req.params.idSubject;
       let studentId = req.params.idStudent;
       Student.findOne({
           where:{id: studentId},
           include: [Subject]
       })
       .then(students=>{
        // res.send(students)
           res.render("subject/scoring",{subjectId: subjectId, studentId: studentId, students: students, error: null})
       })
       .catch(err=>{
           res.render("subject/scoring", {error:err.message})
       })
    },

    scoring : (req, res) =>{
        let subjectId = req.params.idSubject;
        let studentId = req.params.idStudent;
        StudentSubject.update({
            Score: req.body.Score
        },{
            where:{
                studentId: studentId,
                subjectId: subjectId
            }
        })
        .then(()=>{
            res.redirect(`/subjects/${subjectId}/enrolled-students`)
        })
        .catch(err=>{
            res.render("subject/scoring", {studentId: studentId, subjectId: subjectId, error:err.message})
        })
    }

}

