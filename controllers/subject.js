const Model = require('../models/index')

class Controller{

    static showAll() {
        return new Promise(function (resolve, reject) {
            Model.Subject
                .findAll({
                    attributes: ['id', 'subjectName'],
                    include: [{ model: Model.Student }, {model: Model.Teacher}],
                    order: [['id', 'ASC']],
                })
                .then(function (data) {
                    resolve(data)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

    static add(subjectName) {
        // return new Promise(function(resolve,reject){
        return Model.Subject
            .create({
                subjectName: subjectName
            },{})
        // })
    }

    static update(subName,id) {
        return Model.Subject
            .update({
                subjectName: subName,
            },{
                where:{
                    id:id
                }
            })
    }

    static delete(id){
        return Model.Subject
        .destroy({
            where:{
                id:id
            }
        })
    }


}

module.exports = Controller