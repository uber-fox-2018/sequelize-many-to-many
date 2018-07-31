const router = require('express').Router()
const Controller = require('../controller/student')
const ControllerSubject = require('../controller/subject')
const ControllerSubjectStudent =  require('../controller/subjectStudent')

router.get('/',(req,res)=>{
    Controller.showData()
    .then((dataStudents)=>{
        // res.send(req.query.message)
        res.render('student/showDataStudent',{dataStudents : dataStudents, message : req.query.message})
    })
    .catch(err =>{
        res.send(err)
    })
})

router.get('/add',(req,res)=>{
    res.render('student/addStudent',{message : req.query.message})
})


router.post('/add',(req,res)=>{
    Controller.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email
    })
    .then(() =>{
        res.redirect('/student/add?message=data succesfully added')
    })

    .catch(err =>{
        res.send(err)
    })
})

router.get('/:id/edit',(req,res)=>{
    Controller.getById(req.params.id)
    .then(dataToEdit =>{
        res.render('student/editStudent',{dataToEdit: dataToEdit, message : null})
    })
    .catch(err =>{
        res.send(err)
    })
    // res.render()
})

router.post('/:id/edit',(req,res)=>{
    Controller.update(
        {firstName : req.body.firstName, 
         lastName : req.body.lastName,
         email : req.body.email},{where : {id : req.params.id}})
    .then(()=>{
        res.redirect('/student?message=data updated')
    })

    .catch(err =>{
        res.send(err)
    })
})

router.get('/:id/delete',(req,res)=>{
    Controller.destroy({where : {id : req.params.id}})
    .then(()=>{
        res.redirect('/student?message=data deleted')
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