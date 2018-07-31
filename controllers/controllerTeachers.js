const Model = require('../models')

class ControllerTeacher {
  static showSubjects() {
    return new Promise((resolve, reject) => {
      Model
        .Subject
        .findAll()
        .then(dataSubject => {
          resolve(dataSubject)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static showTeachers() {
    return new Promise((resolve, reject) => {
      Model
        .Teacher
        .findAll({
          order:[
            ['firstName', 'ASC']
          ],
          include: [{
            model: Model.Subject
          }]
        })
        .then(teachersData => {
          resolve(teachersData)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static registerTeacher(newTeacher) {
    return new Promise((resolve, reject) => {
      Model
        .Teacher
        .create(newTeacher)
        .then(() => {
          resolve(`Success to added`)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static editTeacher(newData, id) {
    return new Promise((resolve, reject) => {
      Model
        .Teacher
        .update(newData, {
          where: {
            id:id
          }
        })
        .then(() => {
          resolve('Successfully to update')
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static removeTeacher(id) {
    return new Promise ((resolve, reject) => {
      Model
        .Teacher
        .destroy({
          where: {
            id:id
          }
        })
        .then(() => {
          resolve('Successfully to delete')
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static findOneTeacher(id) {
    return new Promise((resolve, reject) => {
      Model
        .Teacher
        .findOne({
          where: {
            id:id
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

module.exports = ControllerTeacher