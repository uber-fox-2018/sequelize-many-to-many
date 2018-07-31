const express = require('express')
const route = express()
const school = require('./school')

route.use(school.teacher)
route.use(school.subject)
route.use(school.student)

route.get('/',(req,res)=>{
    res.send('All Teacher Data')
})

module.exports = route 