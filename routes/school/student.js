const express = require('express')
const routes = express()
const model = require('../../models')
const student = model.Student
const subject = model.Subject
const conj = model.StudentCon
const bodyParser = require('body-parser')
routes.use(bodyParser.json()); // for parsing application/json
routes.use(bodyParser.urlencoded({
    extended: true
}));
routes.get('/students',(req,res)=>{
    //res.send('Data student')
    student.findAll({
        include : [{
            model : subject
        }]
    })
    .then(students =>{
        res.render('showAllStudents.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
    
})

routes.post('/students/edit/:id',(req,res)=>{
   

    student.update({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        
    },{
        where: {id:req.params.id}
    }).then(() => {

        res.redirect("/students")
    })
    .catch(err => {
        let student = {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,            
            id : req.params.id
        }
        
       res.render("editStudent.ejs",{student,validationErrors:err.errors[0].type})
    })
    
})

routes.get('/students/edit/:id',(req,res)=>{
    student.findById(req.params.id)
    .then( student =>{
        //console.log(student)
        res.render('editStudent.ejs',{student,validationErrors:[]})
    })
    
})
routes.get('/students/delete/:id',(req,res)=>{
    student.findById(req.params.id)
    .then( student =>{
        student.destroy().then( ()=> {
            res.redirect('/students', )
        })
        
    })
    
})
routes.get('/students/add',(req,res)=>{
        
        res.render('addStudent.ejs',{validationErrors:[]})
})
routes.post('/students/add',(req,res)=>{
   

    student.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        
    }).then(() => {

        res.redirect("/students")
    })
    .catch(err => {
       
       res.render("addStudent.ejs",{validationErrors: err.errors[0].type})
    })
    
})

routes.get('/students/:id/add-subject',(req,res)=>{
    student.findById(req.params.id,{
        include : [{
            model : subject
        }]
    })
    .then( student =>{
        //console.log(student)
        
        res.render('addSubject.ejs',{student})
    })
    
})
routes.post('/students/:id/add-subject',(req,res)=>{
    
    conj.create({
        studentId : req.params.id,
        subjectId : req.body.subjectId
    })
    .then( () =>{
        res.redirect(`/students/${req.params.id}/add-subject`)
    })
    
})


module.exports = routes
