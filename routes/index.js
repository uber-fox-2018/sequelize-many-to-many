const router = require('express').Router()
const routerTeacher = require('./teacher')
const routerSubject = require('./subject')


router.get('/',(req,res)=>{
    res.render('home')
    
})

router.use('/teacher',routerTeacher)
router.use('/subject',routerSubject)


module.exports =router