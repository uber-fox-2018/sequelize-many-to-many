const models = require('../models')

module.exports = {
  dataStudent: (req, res) => {
    models
      .Student
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataAllStudent => {
        res.render('./student/index', {
          data: dataAllStudent,
        })
      })
      .catch(err => {
        res.send(err.message)
      })
  }, 
  getStudent: (req, res) => {
    models
      .Student
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(getStudent => {
        models
          .Subject
          .findAll({
            order: [
              ['id', 'ASC']
            ]
          })
          .then(dataSubject => {
            res.render('./subject/form-add-student-subject', {
              data: getStudent,
              subject: dataSubject
            })
          })
          .catch(err => {
            res.json(err)
          })
      })
      .catch(err => {
        res.json(err.message)
      })
      
  },
  postStudent: (req, res) => {
    models
      .Subject
      .findOne({
        where: {
          subject_name: req.body.subject_name
        }
      })
      .then(data => {
        let SubjectId = data.id
        let StudentId = req.params.id
        models
          .StudentSubject
          .create({ StudentId, SubjectId })
          .then(() => {
            res.redirect('/students')
          })
          .catch(err => {
            res.json(err)
          })
      })
  }

}