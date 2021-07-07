const express = require('express')
const router = express.Router()
const models = require('../models/')
const Student = models.Student
const StudentSubject = models.StudentSubject

//ambil smua data Student yang ada di DAtabase
router.get('/', function(req,res){
    Student.findAll()
    .then((dataStudent) => {
        res.render('student.ejs', {dataStudent:dataStudent, err:null})
    })
    .catch((err) => {
        res.render('student.ejs', {dataStudent:null, err:err})
    })    
})

//add student
router.get('/addStudent', function(req,res){
    res.render('addStudent.ejs')
})

router.post('/addStudent',function(req,res){
    Student.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
    })
    .then(() => {
        res.redirect('/student')
    })
})

// editStudent or update

router.get('/editStudent/:id', function(req,res){
    Student.findById(req.params.id)

    .then((dataStudent) =>{
        res.render('editStudent.ejs', {dataStudent:dataStudent})
    })
})

router.post('/editStudent/:id', function(req,res){
    Student.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
    },{
    where: {id:req.params.id} })

    .then(() => {
        res.redirect('/student')
    })
})
//delete Student

router.get('/delete/:id', function(req,res){
    Student.destroy({
        where: {id:req.params.id}
    })
    .then(() => {
        res.redirect('/student')
    })

})

// add Subject to student

router.get('/addSubject/:id', function(req,res){
    let student = null
    // console.log(req.params);
    
    Student.findById(req.params.id)
    .then((studentData) => {
        student = studentData
        // console.log(studentData);
        
        models.Subject.findAll()
        .then((subjectData)=> {
            res.render('addStudentSubject.ejs', {studentData:student,subjectData:subjectData,err:null})
            
        })
    })

    

})

router.post('/addSubject/:id',function(req,res){
    StudentSubject.create({
        StudentId: req.params.id,
        SubjectId: req.body.SubjectId
    })

    .then(function(){
        res.redirect('/student')
    })
    .catch(err => {
        res.send(err)
    })
} )



module.exports = router