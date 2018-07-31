const routes = require('express')();
const Model = require('../models')
routes.get('/subjects', (req,res)=>{
    Model.Subject.findAll({
        include:[{
            model:Model.Teachers
        }]
    })
        .then(all =>{
            res.render('./subjects/index.ejs',{data:all})
        })
})

routes.get('/subjects/:id/enrolled-students',(req,res)=>{
    // Model.Subject.findById(req.params.id,{
    //     include:[{
    //         model:Model.Student
    //     }]
    // })
    Model.Subject.findAll({
        where:{
            id:req.params.id
        },
        include:[ Model.Student ]
    })
        .then(test =>{
            res.send(test)
        })
        .catch(err =>{
            res.send(err)
        })
})

module.exports = routes