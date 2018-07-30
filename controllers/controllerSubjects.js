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
}

module.exports = ControllerSubject