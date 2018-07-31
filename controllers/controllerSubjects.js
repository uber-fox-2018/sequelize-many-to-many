const Model = require('../models')

class ControllerSubject {
    static showSubjects() {
        return new Promise((resolve, reject) => {
            Model
              .Subject
              .findAll({
                  include: [{
                      model: Model.Teacher
                  }]
              })
              .then(dataSubject => {
                resolve(dataSubject)
              })
              .catch(err => {
                reject(err)
              })
        })
    }

    static showScore(id) {
        return new Promise (function(resolve, reject) {
          Model
            .StudentSubject
            .findAll({
              include: [{
                model: Model.Subject,
                include: [{
                  model: Model.Student
                }]
              },],
              where: {
                SubjectId:id
              }
            })
            .then(data => {
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        })
      }
}

module.exports = ControllerSubject