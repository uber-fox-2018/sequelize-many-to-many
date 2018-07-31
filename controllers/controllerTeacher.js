const Model = require('../models')

class ControllerTeacher {
    static showTeacher () {
        return Model.Teacher.findAll({
            order: [["id", "ASC"]],
            include: [Model.Subject],
        })
    }

    static createTeacher (firstName, lastName, email, SubjectId) {
        return Model.Teacher.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            SubjectId: SubjectId
        })
    }

    static getTeacher (id) {
        return Model.Teacher.findOne({
            where: {id: id}
        })
    }

    static updateTeacher (id, firstName, lastName, email, SubjectId) {
        return Model.Teacher.update({
            firstName: firstName,
            lastName: lastName,
            email: email,
            SubjectId: SubjectId
        }, {where: {id: id}})
    }

    static deleteTeacher (id) {
        return Model.Teacher.destroy({
            where: {id: id}
        })
    }

}

module.exports = ControllerTeacher