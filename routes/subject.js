const express = require('express')
const router = express.Router()
const models = require('../models')
const Subject = models.Subject

router.get('/', function(req,res){
    Subject.findAll({
        include:[models.Teacher]
    })
    .then((dataSubject) => {
        res.render('subject.ejs',{dataSubject:dataSubject, err:null})
    })
})

router.get('/enrolledStudents/;id', function(req,res){
    Subject.findById(req.params.id, {
        order : [['id','ASC']],
        include:[models.Student]
    })
    .then((dataSubject)=> {
        res.render('enrolledStudents.ejs', {dataSubject:dataSubject })
    })
})

module.exports = router