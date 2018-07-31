const Model = require('../models/index')

class Controller {
    static getAllDataSubject() {
        return new Promise(function (res, rej) {
            Model.Subject.findAll({
                include: Model.Teacher
            })
                .then(data => {
                    res(data)
                })

                .catch(err => {
                    rej(err)
                })
        })
    }

    static create(obj) {
        return Model.Subject.create(obj)
    }

    static findById(id, include, condition) {
        return Model.Subject.findById(id, include, condition)
    }

}

module.exports = Controller