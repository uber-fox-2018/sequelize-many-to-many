const models = require('../models');
const Subject = models.Subject;
const Teacher = models.Teacher;
const Student = models.Student;
const StudentSubject = models.StudentSubject;

module.exports = {
    getAllSubjects : (req, res) =>{
        console.log("=======A=============")
        Subject.findAll({
            order : [["id", "ASC"]],
            include: [Teacher]
        })
        .then(subjectData=>{
            console.log("=======B=============") 
            res.render("subjects", {subjects:subjectData})
            })
            .catch(err=>{
                console.log("=======C=============")
                res.render("error");
            })
    },

    addForm : (req, res) =>{
        console.log("=======D=============")
        res.render("add_subject_form")
    },

    addSubject : (req, res) =>{
         console.log("=======E=============")
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
        console.log('----1-----')        
        let subjectId = req.params.id;
        Subject.findAll({
            include: [Student],
            where: { id: subjectId },
            
        })
        .then(studentSubject=>{
            console.log(' =) ----2-----')
            let subject = studentSubject[0];
            res.render("subjectEnrollment", { subject:subject});
        })
        .catch(err=>{
            console.log('----3-----')
            res.send('ini errror')
            // res.render("subjectEnrollment", { studentSubject: studentSubject, error: err.message })
        })
    },
   

    studentForScoring : (req, res)=>{
        console.log('----1-----')     
       let subjectId = req.params.idSubject;
       let studentId = req.params.idStudent;
       Student.findOne({
           where:{id: studentId},
           include: [Subject]
       })
       .then(students=>{
        console.log('----2-----')
        // res.send(students)
           res.render("scoring",{subjectId: subjectId, studentId: studentId, students: students, error: null})
       })
       .catch(err=>{
        console.log('----3-----')
           res.render("scoring", {error:err.message})
       })
    },

    scoring : (req, res) =>{
        console.log('----4-----')
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
            console.log('----5-----')
            res.redirect(`/subjects/${subjectId}/enrolled-students`)
        })
        .catch(err=>{
            console.log('----6-----')
            res.render("scoring", {studentId: studentId, subjectId: subjectId, error:err.message})
        })
    }

}

