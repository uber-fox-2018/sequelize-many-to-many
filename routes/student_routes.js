const router = require('express').Router()
const { dataStudent, getStudent, postStudent } = require('../controller/student_controller')

router.get('/students', dataStudent)
router.get('/students/:id/add-subject', getStudent)
router.post('/students/:id/add-subject', postStudent)

module.exports = router