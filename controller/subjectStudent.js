const Model = require('../models/index')

class Controller{
    static update(value, condition){
        return Model.SubjectStudent.update(value,condition)
    }

    static findById(id){
        return Model.SubjectStudent.findById(id)
    }

    static create(obj){
        return Model.SubjectStudent.create(obj)
    }

    static findOne(condition){
        return Model.SubjectStudent.findOne(condition)
    }
}

module.exports = Controller