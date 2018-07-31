const routes = require('express').Router()
const Controller = require('../../controllers/subject')
const Model = require('../../models')

routes.get('/',function(req,res){

    Controller.showAll()
    .then(function(subject){
        // res.send(subject)
        res.render('./subjects/showTable',{dataSubject:subject})
    })
    .catch(function(){

    })
    // res.send('ini get subject')
})

routes.post('/',function(req,res){

    res.send('ini post subject')
})

routes.get('/add',function(req,res){

    res.send('ini form teacher')

})

routes.post('/add',function(req,res){

    res.send('ini form teacher')

})

routes.get('/edit/:id',function(req,res){
    res.send('ini form edit subject')
})

routes.post('/edit/:id',function(req,res){
    res.send('ini form edit subject')
})

routes.get('/:id/enrolled-students',function(req,res){
    Model.Subject
    .findById(req.params.id,{
        include:[{
            model:Model.Student
        }]
    })
    .then(function(subject){
        // res.send(subject)
        res.render('./subjects/showTableEnrolled',{dataSubject:subject})
    })
    .catch(function(err){
        console.log(err);
    })
})

routes.post('/:id/enrolled-students',function(req,res){
    Model.StudentSubject
    .update({
        score:req.body.score
    })

})

routes.get('/:id/give-score'),function(req,res){
    Model.StudentSubject
    .findById(req.params.id,{
        include:[{model:Model.Student},{model:Model.Subject}]
    })
    .then(function(studentSubject){
        res.send(studentSubject)
    })
}

module.exports = routes