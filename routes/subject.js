const routes = require('express').Router()
const Controller = require('../controller/subject')
const ControllerSubjectStudent = require('../controller/subjectStudent')

routes.get('/',(req,res)=>{
    Controller.getAllDataSubject()
    .then(dataSubjects =>{
        // res.json(dataSubjects);  
        
        res.render('subject/showDataSubject',{dataSubjects})
        
    })
    .catch(err =>{
        console.log(err);
        
    })
})

routes.get('/:id/enroll-student',(req,res)=>{
    Controller.findById(req.params.id)
    .then(data=>{
        res.render('subject/enroll',{data : data, subjectId : req.params.id})
    })
    
    .catch(err =>{
        res.send(err)
    })
})

routes.get('/:id/givescore',(req,res)=>{
    ControllerSubjectStudent.findById(req.params.id)
    .then(data =>{
        res.render('subject/formScore',{data : data, idSubjectStudent : req.params.id })
    })

    .catch(err =>{
        res.send(err)
    })
})

routes.post('/:id/givescore',(req,res)=>{
   ControllerSubjectStudent.update({score : req.body.score},{where : {id : req.params.id}})
   .then(()=>{
       res.redirect('/subject')
   })
   .catch(err =>{
       res.send(err)
   })
})


module.exports = routes