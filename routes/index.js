const router = require('express').Router()
const routesStudent = require('./student_routes')
const routesSubject = require('./subject_routes')

router.get('/', (req, res) => {
  res.render('index')
})

router.use(routesStudent)
router.use(routesSubject)

module.exports = router