const Model = require('../models')

class ControllerSubject {
    static showSubject () {
        return Model.Subject.findAll({
            include: [Model.Teacher],
        })
    }

    static createSubject (name) {
        return Model.Subject.create ({
            name: name
        })
    }

    static getSubject (id) {
        return Model.Subject.findOne({
            where: {id: id}
        })
    }

    static updateSubject (id, name) {
        return Model.Subject.update({
            name: name
        }, {where: {id: id}})
    }

    static deleteSubject (id) {
        return Model.Subject.destroy({
            where: {id: id}
        })
    }
}

module.exports = ControllerSubject