const Model = require('../models')

class ControllerStudent {
    static showStudent () {
        return Model.Student.findAll()
    }

    static createStudent (firstName, lastName, email) {
        return Model.Student.create({
            firstName:firstName,
            lastName: lastName,
            email: email
        })
    }

    static deleteStudent (id) {
        return Model.Student.destroy({
            where: {id: id}
        })
    }

    static getStudent(id){
        return Model.Student.findOne({
            where: {id: id}
        })
    }

    static updateStudent(id,firstName,lastName,email){
        return Model.Student.update({
            firstName: firstName,
            lastName: lastName,
            email: email
        },{where: {id: id}})
    }
}

module.exports = ControllerStudent