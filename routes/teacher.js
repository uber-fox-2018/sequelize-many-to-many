const router = require('express').Router()
const ControllerTeacher = require('../controller/teacher')
const ControllerSubject = require('../controller/subject')



router.get('/',(req,res)=>{
    ControllerTeacher.showTeacher()

    .then(dataTeachers =>{
        res.render('teacher/showDataTeacher',{dataTeachers})
    })

    .catch(err =>{
        console.log(err);
        
    })
})

router.get('/add',(req,res)=>{
    ControllerSubject.getAllDataSubject()
    .then(dataSubjects =>{
        var message  = req.app.locals.message
        res.render('teacher/addTeacher',{dataSubjects, message})
    })

    .catch(err =>{
        console.log(err);
        
    })
})


router.post('/add',(req,res)=>{

    ControllerTeacher.addTeacher(
        {firstName : req.body.firstName,
         lastName : req.body.lastName,
         email : req.body.email,
         SubjectId: req.body.SubjectId})
    .then(() =>{
        res.redirect('/teacher',)

    })

    .catch(err =>{     
        ControllerSubject.getAllDataSubject()
        .then(dataSubjects =>{
            var message = err.message
            res.render('teacher/addTeacher',{dataSubjects, message})
        })

        .catch(err =>{
            console.log(err);
            
        })
    })
})

router.get('/edit/:id',(req,res)=>{

    Promise
        .all([
            ControllerTeacher.getById(req.params.id),
            ControllerSubject.getAllDataSubject()    
        ])
        .then(function (data) {
            dataToEdit = data[0]
            dataSubjects = data[1]
            
            res.render('teacher/editTeacher',{dataToEdit : dataToEdit,dataSubjects : dataSubjects, message : req.app.locals.message})
            
        })

        .catch(err =>{
            console.log(err);
            
        });
})

router.post('/edit/:id',(req,res)=>{
    ControllerTeacher.edit({firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        SubjectId : req.body.SubjectId,
    id : req.params.id},{where : {id : req.params.id}})
    .then(() =>{
        res.redirect('/teacher')
    })

    .catch(err =>{
        Promise
              .all([
                ControllerTeacher.getById(req.params.id),
                ControllerSubject.getAllDataSubject()    
              ])
              .then(function(data){
                dataToEdit = data[0]
                dataSubjects = data[1]
                res.render('teacher/editTeacher',{dataToEdit : dataToEdit,dataSubjects : dataSubjects, message : err.message})
            
              })
    })
})

router.get('/delete/:id',(req,res)=>{
    ControllerTeacher.delete({where : {id : req.params.id}})
    .then(()=>{
        res.redirect('/teacher')
    })

    .catch(err =>{
        console.log(err);
        
    })
})


module.exports = router