const Model = require('../models')

class ControllerStudentSubject {
    static createStudentSubject (StudentId, SubjectId) {
        return Model.StudentSubject.create({
            StudentId: StudentId,
            SubjectId: SubjectId,
        })
    }

    static showStudentSubject(id) {
        return Model.Subject.findById(id,
            {   
                order: [['id', 'asc']],
                include: [Model.Student]}
        )
    }

    static updateStudentSubject(id, score) {
        return Model.StudentSubject.update({
            score: score
        }, {where: {id:id}})
    }
    // static showStudentSubject () {
    //     return Model.StudentSubject.findAll({
    //         // where: {id: id},
    //         include: [{
    //             model: Model.Subject,
    //             include: [{
    //                 model: Model.Student
    //             }]
    //         }] 
    //     })
    // }
}

module.exports = ControllerStudentSubject