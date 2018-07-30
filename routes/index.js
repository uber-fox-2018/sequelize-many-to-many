const router = require('express').Router()
const routerTeacher = require('./teacher')
const routerSubject = require('./subject')
const routerStudent = require('./student')


router.get('/',(req,res)=>{
    res.render('home')
    
})

router.use('/teacher',routerTeacher)
router.use('/subject',routerSubject)
router.use('/student',routerStudent)


module.exports =router