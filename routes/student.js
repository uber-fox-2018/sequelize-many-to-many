const router = require('express').Router();
const model = require ('../models');

router.get('/', (req, res) => {
  model.Student.findAll({
    order: [
      ['id', 'ASC']
    ]
  })
  .then( students => { 
    res.render('students/index', {students})
  })
  .catch( err => {
    console.log(err.message)
  })
})

router.get('/add', (req, res) => {
  res.render('students/add', {err: null})
})

router.post('/add', (req, res) => {
  let studentObj = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  model.Student.create(studentObj)
  .then(()=> {
    res.redirect('/students')
  })
  .catch(err => {
    res.render('students/add', {err: err})
  })
})

router.get('/:id/add-subject', (req, res) => {
  model.Student.findAll({
    // where: {
    //   id: req.params.id
    // },
    // order: [
    //   ['id', 'ASC']
    // ]
  })
  .then( student => {
    res.json(arr)
  })
  .catch( err => {
    res.send(err.message)
  })
})

router.post('/:id/add-subject', (req, res) => {
  let studentSubjectObj = {
    StudentId: +req.params.id,
    SubjectId: +req.body.SubjectId
  }
  model.Studentsubject.create(studentSubjectObj)
  .then(() => {
    res.redirect('/students')
  })
  .catch(err => {
    res.send(err.message)
  })
})


router.get('/edit/:id', (req, res) => {
  model.Student.findById(req.params.id)
  .then((student) => {
    res.render('students/edit', {student: student, err:false})
  })
  .catch(err => {
    console.log(err.message)
  })
})

router.post('/edit/:id', (req, res) => {
  let studentObj = {
    id: req.params.id,
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  model.Student.update(studentObj, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/students')
  })
  .catch(err => {
    res.render('students/edit', {student: studentObj, err:err})
  })
})

router.get('/delete/:id', (req, res)=> {
  model.Student.destroy({
    where: {id:req.params.id}
  })
  .then(()=> {
    res.redirect('/students')
  })
  .catch(err => {
    console.log(err.message)
  })
})


module.exports = router;