const Model = require('../models')

class ControllerStudent {
  static showStudents() {
    return new Promise((resolve, reject) => {
      Model.Student.findAll({
        order: [
          ['id', 'ASC']
        ]
      })
        .then(dataStudents => {
          resolve(dataStudents)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static registerStudent(newData) {
    return new Promise(function (resolve, reject) {
      Model
        .Student
        .create(newData)
        .then(() => {
          resolve('Successfully to added')
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static findStudent(id) {
    return new Promise(function(resolve, reject) {
      Model
        .Student
        .findById(id)
        .then(dataStudent => {
          resolve(dataStudent)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static editStudent(newData, id) {
    return new Promise(function(resolve, reject) {
      Model
        .Student
        .update(newData, {
          where: {
            id:id
          }
        })
        .then(() => {
          resolve(`Successfully to update`)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static removeStudent(id) {
    return new Promise(function(resolve, reject) {
      Model
        .Student
        .destroy({
          where: {
            id:id
          }
        })
        .then(() => {
          resolve(`Successfully to delete`)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static showSubjects() {
    return new Promise(function(resolve, reject) {
      Model
        .Subject
        .findAll()
        .then(data => {
          resolve(data)
        })
        .catch(err => [
          reject(err)
        ])
    })
  }

  static addSubjectToStudent(newData) {
    return new Promise(function(resolve, reject) {
      Model
        .StudentSubject
        .create(newData)
        .then(() => {
          resolve(`Successfully to create`)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static enrolledStudents() {
    return new Promise (function(resolve, reject) {
      Model
        .StudentSubject
        .findAll({
          include: [{
            model: Model.Subject,
            include: [{
              model: Model.Student
            }]
          },]
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


module.exports = ControllerStudent