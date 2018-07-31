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

module.exports = router