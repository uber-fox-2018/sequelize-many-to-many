const router = require('express').Router();
const studentRouter = require('./student');
const subjectRouter = require('./subject');
const teacherRouter = require('./teacher');

router.get('/', (req, res) => {
  res.render('index')
})

router.use('/students', studentRouter);
router.use('/subjects', subjectRouter);
router.use('/teachers', teacherRouter);

module.exports = router;