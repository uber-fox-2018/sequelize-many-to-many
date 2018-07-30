const router = require('express').Router()
const Controller = require('../controller/student')
const ControllerSubject = require('../controller/subject')
const ControllerSubjectStudent =  require('../controller/subjectStudent')

router.get('/',(req,res)=>{
    Controller.showData()
    .then((dataStudents)=>{
        res.render('student/showDataStudent',{dataStudents})
    })
    .catch(err =>{
        res.send(err)
    })
})

router.get('/:id/add-subject',(req,res)=>{

    Promise 
        .all([
            ControllerSubject.getAllDataSubject(),
            Controller.getById(req.params.id)
        ])
    
        .then((data)=>{
            res.render('student/add-subject',{dataToEdit : data[1], dataSubjects : data[0]})
        })

        .catch((err)=>{
            console.log(err);
            
        })
})

router.post('/:id/add-subject',(req,res)=>{
    ControllerSubjectStudent.create({
        SubjectId : req.params.id,
        StudentId : req.body.SubjectId
    })

    .then(() =>{
        res.redirect('/student')
    })

    .catch(err =>{
        res.send(err)
    })
})




module.exports = router