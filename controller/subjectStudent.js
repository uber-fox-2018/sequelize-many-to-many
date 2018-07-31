const Model = require('../models/index')

class Controller{
    static update(value, condition){
        return Model.SubjectStudent.update(value,condition)
    }

    static findById(id){
        return Model.SubjectStudent.findById(id)
    }
}

module.exports = Controller