const routes = require('express').Router()
const Controller = require('../controller/subject')

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

routes.get('/:id/enrolled-students',(req,res)=>{
    
    Controller.findById(req.params.id)
    .then(data =>{
        // res.json(data)

        res.render('subject/enroll',{data})
    })

    .catch(err =>{
        res.send(err)
    })
})


module.exports = routes