const routes = require('express')();
const Model = require('../models')

routes.get('/students',(req,res)=>{
    Model.Student.findAll()
        .then(fileStudent =>{
            res.render('./students/index.ejs',{data:fileStudent})
        })
})

routes.get('/students/:id', (req,res)=>{
    let idDelete = req.params.id
    Model.Student.destroy({
        where:{ id: idDelete}
    });
    res.redirect('/students')
})

routes.get('/students/:id/add-subject',(req,res)=>{
    Model.Student.findById(req.params.id)
        .then(dataStudent =>{
            Model.Subject.findAll()
                .then(dataSubject =>{
                    res.render('./students/subject.ejs',{dataStudent:dataStudent,dataSubject:dataSubject})
                })
        })
})

routes.post('/students/:id/add-subject',(req,res)=>{
    let addSubject = {
        studentId:req.params.id,
        subjectId:req.body.subject,
        createdAt: new Date,
        updatedAt: new Date
    }
    Model.Subject_Student.create(addSubject)
    res.redirect('/students')
})

routes.get('/studens/add-students',(req,res)=>{
    res.render('./students/add.ejs')
})

routes.post('/studens/add-students',(req,res)=>{
    let dataRegister ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        createdAt: new Date,
        updatedAt: new Date
    }

    Model.Student.create(dataRegister)
    res.redirect('/students')
})

module.exports = routes