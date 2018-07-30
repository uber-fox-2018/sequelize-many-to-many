const models = require('../models')
const Op = require('sequelize').Op

module.exports = {
  dataSubject: (req, res) => {
    models
      .Subject
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataSubject => {
        res.render('./subject/index', {
          data: dataSubject
        })
      })
  }, 
  getDataSubjectStudent: (req, res) => {
    models
      .Subject
      .findAll({
        order: [
          ['id', 'ASC']
        ],
        include: [
          {
            model: models.Student
          }, 
          {
            model: models.StudentSubject
          }
        ],
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.render('./subject/student-subject', {
          title: data[0].subject_name,
          data: data[0],
          subjectId: data[0].id,
          message: null
        })
      })
  },
  postScore: (req, res) => {
    models
      .StudentSubject
      .update({
        score: req.body.score
      }, {
        where: {
          [Op.and]: {
            SubjectId: req.params.subjectId,
            StudentId: req.params.id
          }
        }
      })
      .then(() => {
        res.redirect(`/subjects/${req.params.subjectId}/enrolled-students`)
      })
  }
}