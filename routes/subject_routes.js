const router = require('express').Router()
const { dataSubject, getDataSubjectStudent, postScore } = require('../controller/subject_controller')

router.get('/subjects', dataSubject)
router.get('/subjects/:id/enrolled-students', getDataSubjectStudent)
router.post('/subjects/:id/:subjectId/give-score', postScore)


module.exports = router